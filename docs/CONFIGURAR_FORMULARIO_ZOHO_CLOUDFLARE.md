# Configurar formulario con Zoho Mail y Cloudflare Pages

Esta versión ya no usa FormSubmit. El formulario de React envía los datos a:

```text
/api/contacto
```

Ese endpoint está en:

```text
functions/api/contacto.js
```

Está preparado para Cloudflare Pages Functions y envía el correo usando la API REST de Zoho Mail.

## Variables necesarias en Cloudflare

En Cloudflare:

```text
Workers & Pages -> tu proyecto -> Settings -> Variables and Secrets
```

Añade estas variables como secretos:

```text
ZOHO_CLIENT_ID
ZOHO_CLIENT_SECRET
ZOHO_REFRESH_TOKEN
ZOHO_ACCOUNT_ID
ZOHO_FROM=info@egoacademy.es
MAIL_TO=info@egoacademy.es
```

## Nota importante

No pongas estas variables en React ni en archivos `.env` públicos. Tienen que estar en Cloudflare como secretos.

## Zoho Europa

El código está preparado para cuentas europeas de Zoho:

```text
https://accounts.zoho.eu
https://mail.zoho.eu
```

Si tu cuenta no fuera europea, habría que cambiar los dominios a los de tu región.

## Comprobar en local

Para probar solo la parte visual:

```powershell
npm install
npm run dev
```

Para probar el envío real necesitas desplegar en Cloudflare Pages con las variables configuradas.
