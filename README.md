# ËGO Academy React - versión completa

Proyecto generado desde el ZIP actual del usuario, manteniendo la home validada y añadiendo páginas internas.

## Ejecutar

```powershell
npm install
npm run dev
```

## Páginas incluidas

- Inicio
- Sobre nosotros
- Nuestros cursos
- Cursos de estética
- Peluquería: iniciación
- Peluquería: avanzados
- Instalaciones
- Reserva de plaza

## Publicar en Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`


## Corrección incluida

Router corregido para que los enlaces `#/...` cambien de página al hacer clic.


## Instalaciones v2

Página de instalaciones ajustada con hero superior, vídeo de instalaciones y galería ampliable tipo lightbox.


## Instalaciones v3

- Añadido degradado real del hero hacia el fondo claro.
- Bloque oscuro de instalaciones solapado sobre el hero, como en la home.
- Galería configurada con lightbox.
- Nota: desde la web pública solo he podido localizar 2 URLs de imagen reales de instalaciones. Para replicar el 100% de la galería original, añade las imágenes restantes a `public/instalaciones` o pásame los enlaces.


## Galería completa añadida

- Se han integrado las 16 imágenes reales proporcionadas.
- Todas las imágenes se amplían al hacer clic.
- La galería ya no repite imágenes.


## Ajuste instalaciones

- Cabecera de instalaciones cambiada a imagen interior correcta.
- Bloque oscuro bajado para no tapar el título.
- Galería ajustada a 4 columnas en escritorio.


## Sobre nosotros ajustada

- Cabecera con imagen de fondo y placa dorada.
- Bloque oscuro centrado y estrecho como la referencia.
- Filosofía en una sola columna con borde dorado.
- Cita de directora e imagen inferior.


## Sobre nosotros v2

- Aplicado degradado/solape como en Inicio e Instalaciones.
- Corregida imagen inferior para aproximarla a la original.


## Sobre nosotros v3

- Posicionamiento del hero igualado al de Instalaciones.
- Mismo alto de cabecera, degradado y separación del bloque oscuro.


## Sobre Nosotros + Nuestros Cursos

- Sobre Nosotros ajustada con ancho, tipografía, separación y fotografía inferior.
- Nuestros Cursos con hero, degradado, título dorado, texto introductorio y tarjetas existentes.
- Páginas hijas de cursos con hero/degradado/título coherente.


## Reserva de plaza + favicon

- Página de Reserva con hero, degradado y título igual al resto.
- Formulario configurado con FormSubmit hacia info@egoacademy.es.
- Añadido favicon e iconos web.
- Añadidos metadatos básicos SEO/Open Graph.


## Menú desplegable

- Barras laterales en hover para todos los elementos del menú.
- Desplegable en "Nuestros cursos" con las tres opciones.


## Ajuste final menú

- Flecha del desplegable alineada.
- Submenú subido y con zona segura para que no desaparezca al mover el ratón.


## Fix definitivo menú cursos

- Las barras laterales del item "Nuestros cursos" ya no se pisan.
- Flecha corregida y alineada.
- Submenú mantiene zona segura sin usar el mismo pseudo-elemento de las barras.

Deploy limpio 05/20/2026 13:33:42
