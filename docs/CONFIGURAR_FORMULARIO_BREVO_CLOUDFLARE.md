# Configurar formulario de reserva con Brevo + Cloudflare Pages

Esta versión ya no usa Zoho API. El formulario envía a `/api/contacto` y la función de Cloudflare Pages usa Brevo para mandar el correo a `info@egoacademy.es`.

## 1. Crear cuenta/API key en Brevo

1. Entra en Brevo.
2. Ve a **SMTP & API**.
3. Crea una API key.
4. Copia la API key.

## 2. Verificar remitente

En Brevo verifica como remitente:

```text
info@egoacademy.es
```

Si Brevo no te deja usar ese remitente todavía, puedes usar otro remitente verificado y cambiar `MAIL_FROM`.

## 3. Variables en Cloudflare

Como se ha quitado `wrangler.toml`, ya puedes configurar variables desde el panel de Cloudflare:

```text
Cloudflare > Workers & Pages > egoacademy-react > Configuración > Variables y secretos
```

Añade:

| Nombre | Tipo | Valor |
|---|---|---|
| `BREVO_API_KEY` | Secreto | API key de Brevo |
| `MAIL_TO` | Variable | `info@egoacademy.es` |
| `MAIL_FROM` | Variable | `info@egoacademy.es` |
| `MAIL_FROM_NAME` | Variable | `ËGO Academy Web` |

## 4. Probar

Después de guardar variables, espera al nuevo despliegue de Cloudflare y prueba el formulario.

Si falla, mira el mensaje que aparece debajo del formulario o revisa los logs de Cloudflare Pages Functions.
