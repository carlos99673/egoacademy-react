const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const DEFAULT_MAIL_TO = 'info@egoacademy.es';
const DEFAULT_MAIL_FROM = 'info@egoacademy.es';
const DEFAULT_FROM_NAME = 'ËGO Academy Web';

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

function buildEmailContent(form) {
  const nombre = escapeHtml(form.nombre);
  const email = escapeHtml(form.email);
  const telefono = escapeHtml(form.telefono);
  const curso = escapeHtml(form.curso);
  const tipoReserva = escapeHtml(form.tipoReserva || 'No indicado');
  const fecha = escapeHtml(form.fecha || 'Sin preferencia');
  const hora = escapeHtml(form.hora || 'Sin preferencia');
  const mensaje = escapeHtml(form.mensaje || 'Sin mensaje adicional.').replaceAll('\n', '<br>');

  return `
    <div style="font-family:Arial,sans-serif;background:#f6f1eb;padding:24px;color:#121d31">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d7ad61;border-radius:18px;overflow:hidden">
        <div style="background:#121d31;color:#d7ad61;padding:22px 26px">
          <h1 style="margin:0;font-size:22px">Nueva reserva desde egoacademy.es</h1>
        </div>
        <div style="padding:24px 26px">
          <p style="margin-top:0">Han enviado una nueva solicitud desde el formulario de reserva.</p>
          <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;font-size:15px">
            <tr><td style="font-weight:bold;width:160px">Nombre</td><td>${nombre}</td></tr>
            <tr><td style="font-weight:bold">Email</td><td>${email}</td></tr>
            <tr><td style="font-weight:bold">Teléfono</td><td>${telefono}</td></tr>
            <tr><td style="font-weight:bold">Tipo</td><td>${tipoReserva}</td></tr>
            <tr><td style="font-weight:bold">Curso/servicio</td><td>${curso}</td></tr>
            <tr><td style="font-weight:bold">Fecha preferida</td><td>${fecha}</td></tr>
            <tr><td style="font-weight:bold">Hora preferida</td><td>${hora}</td></tr>
            <tr><td style="font-weight:bold;vertical-align:top">Mensaje</td><td>${mensaje}</td></tr>
          </table>
        </div>
      </div>
    </div>
  `;
}

async function sendBrevoEmail(env, form) {
  const mailTo = env.MAIL_TO || DEFAULT_MAIL_TO;
  const mailFrom = env.MAIL_FROM || DEFAULT_MAIL_FROM;
  const fromName = env.MAIL_FROM_NAME || DEFAULT_FROM_NAME;

  const payload = {
    sender: {
      name: fromName,
      email: mailFrom
    },
    to: [
      {
        email: mailTo,
        name: 'ËGO Academy'
      }
    ],
    replyTo: {
      email: form.email,
      name: form.nombre
    },
    subject: `Nueva reserva desde egoacademy.es - ${form.nombre}`,
    htmlContent: buildEmailContent(form)
  };

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': env.BREVO_API_KEY
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data?.message || data?.code || 'Brevo no pudo enviar el correo.';
    throw new Error(detail);
  }

  return data;
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    if (!env.BREVO_API_KEY) {
      return jsonResponse({
        ok: false,
        error: 'Falta configurar BREVO_API_KEY en Cloudflare.'
      }, 500);
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

    await sendBrevoEmail(env, form);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || 'Error al enviar la reserva.' }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405);
}
