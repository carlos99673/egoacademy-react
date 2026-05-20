const ZOHO_AUTH_BASE = 'https://accounts.zoho.eu/oauth/v2/token';
const ZOHO_MAIL_BASE = 'https://mail.zoho.eu/api/accounts';

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function normalize(value = '') {
  return String(value).trim();
}

async function getZohoAccessToken(env) {
  const params = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token'
  });

  const response = await fetch(ZOHO_AUTH_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.access_token) {
    throw new Error(data.error || 'No se pudo obtener token de Zoho.');
  }

  return data.access_token;
}

async function sendZohoEmail(env, accessToken, form) {
  const nombre = escapeHtml(form.nombre);
  const email = escapeHtml(form.email);
  const telefono = escapeHtml(form.telefono);
  const curso = escapeHtml(form.curso);
  const mensaje = escapeHtml(form.mensaje || 'Sin mensaje adicional.').replaceAll('\n', '<br>');

  const subject = `Nueva reserva desde egoacademy.es - ${form.nombre}`;
  const html = `
    <h2>Nueva reserva desde egoacademy.es</h2>
    <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,sans-serif">
      <tr><td><strong>Nombre</strong></td><td>${nombre}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Teléfono</strong></td><td>${telefono}</td></tr>
      <tr><td><strong>Curso/servicio</strong></td><td>${curso}</td></tr>
      <tr><td><strong>Mensaje</strong></td><td>${mensaje}</td></tr>
    </table>
  `;

  const payload = {
    fromAddress: env.ZOHO_FROM || env.MAIL_TO || 'info@egoacademy.es',
    toAddress: env.MAIL_TO || 'info@egoacademy.es',
    subject,
    content: html,
    mailFormat: 'html',
    replyTo: form.email
  };

  const response = await fetch(`${ZOHO_MAIL_BASE}/${env.ZOHO_ACCOUNT_ID}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.data?.moreInfo || data?.message || 'Zoho no pudo enviar el correo.');
  }

  return data;
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const requiredEnv = ['ZOHO_CLIENT_ID', 'ZOHO_CLIENT_SECRET', 'ZOHO_REFRESH_TOKEN', 'ZOHO_ACCOUNT_ID'];
    const missing = requiredEnv.filter((key) => !env[key]);
    if (missing.length) {
      return jsonResponse({ ok: false, error: `Faltan variables en Cloudflare: ${missing.join(', ')}` }, 500);
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return jsonResponse({ ok: false, error: 'Solicitud inválida.' }, 400);
    }

    if (normalize(body.website)) {
      return jsonResponse({ ok: true });
    }

    const form = {
      nombre: normalize(body.nombre),
      email: normalize(body.email).toLowerCase(),
      telefono: normalize(body.telefono),
      curso: normalize(body.curso),
      mensaje: normalize(body.mensaje)
    };

    if (!form.nombre || !form.email || !form.telefono || !form.curso) {
      return jsonResponse({ ok: false, error: 'Faltan campos obligatorios.' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return jsonResponse({ ok: false, error: 'El email no tiene un formato válido.' }, 400);
    }

    const accessToken = await getZohoAccessToken(env);
    await sendZohoEmail(env, accessToken, form);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || 'Error al enviar la reserva.' }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405);
}
