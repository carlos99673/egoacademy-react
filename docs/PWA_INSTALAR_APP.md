# PWA - instalación como app

Esta versión deja la web preparada como PWA profesional básica.

## Qué incluye

- `public/site.webmanifest` completo.
- Iconos `192x192` y `512x512`.
- `public/sw.js` como service worker.
- Registro automático del service worker desde React.
- Botón flotante `Descargar app` cuando el navegador permite instalación.
- Soporte `standalone` para Android/Chrome y metadatos básicos para iOS.
- Cache de app shell para que la web cargue mejor y tenga fallback offline básico.

## Cómo probarlo

En local:

```powershell
npm install
npm run dev
```

Para comprobar instalación real, lo ideal es probar en producción con HTTPS:

```powershell
npm run build
```

Sube `dist/` a Cloudflare Pages o despliega el proyecto.

## Notas importantes

- El botón de instalación solo aparece cuando el navegador lanza `beforeinstallprompt`. Chrome/Android suele hacerlo; Safari iOS no muestra ese evento y se instala desde Compartir → Añadir a pantalla de inicio.
- El formulario `/api/contacto` no se cachea para evitar problemas con envíos.
- Si cambias mucho la web, cambia el nombre de cache en `public/sw.js`, por ejemplo `egoacademy-pwa-v6`.
