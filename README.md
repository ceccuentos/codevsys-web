# Especificaciones de la Página Web

## Descripción General
Este proyecto es una página web desarrollada con [Astro](https://astro.build/) y utiliza Tailwind CSS para los estilos. El objetivo es proveer una plataforma moderna, rápida y fácil de mantener para Codevsys.

## Tecnologías principales
- **Astro**: Framework para construir sitios web rápidos y modernos.
- **Tailwind CSS**: Utilizado para la creación rápida de estilos mediante clases utilitarias.
- **TypeScript**: Tipado estático para JavaScript, mejora la mantenibilidad y escalabilidad.
- **PostCSS** y **Autoprefixer**: Procesamiento de CSS y compatibilidad entre navegadores.
- **Supabase**: Plataforma Backend-as-a-Service utilizada para almacenamiento de archivos (brochures) y gestión de base de datos para la suscripción al newsletter.

## Quick Start
Para ejecutar el proyecto, siga estos pasos:

```bash
# Install dependencies
npm install

# Clone this repository
git clone https://github.com/ceccuentos/codevsys-web.git
cd codevsys-web
npm install
npm run dev
```

## Estructura del Proyecto
- `/src/pages/`: Páginas principales del sitio.
- `/src/components/`: Componentes reutilizables para las páginas.
- `/src/layouts/`: Layouts reutilizables para las páginas.
- `/src/styles/`: Archivos CSS globales y personalizados.
- `/src/data/`: Archivos de datos y configuraciones.

### Árbol de carpetas principal

```
/
├── public/             # Archivos estáticos
│   └── favicon.ico
├── src/
│   ├── assets/         # Imágenes y otros recursos
│   ├── components/     # Componentes de UI reutilizables
│   ├── data/           # Configuración y archivos de datos
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Rutas de páginas
│   ├── styles/         # Estilos globales
│   └── utils/          # Funciones utilitarias
└── package.json
```


## Configuración y scripts
- Configuración de Tailwind en `tailwind.config.js`.
- Configuración de PostCSS en `postcss.config.js`.
- Variables de entorno en `.env` y `.env.production`.
- Carpeta `dist/` para el output de producción (ignorada por git).

### Variables de entorno para Supabase
Debes definir las siguientes variables en tu archivo `.env`:

```env
SUPABASE_API_URL=tu_url_supabase
SUPABASE_API_ANON=tu_anon_key_supabase
```
Estas variables permiten la conexión segura con los servicios de almacenamiento y base de datos de Supabase.

## Instalación y uso
1. Instala dependencias:
   ```sh
   npm install
   ```
2. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Construye para producción:
   ```sh
   npm run build
   ```
4. Previsualiza la build de producción:
   ```sh
   npm run preview
   ```
5. Para subir a Vercel
   ```shell
   vercel --prod --force
   ```

## Servicios integrados con Supabase

El proyecto utiliza Supabase para los siguientes servicios:

- **Almacenamiento de brochures**: Los archivos PDF y otros materiales descargables se almacenan en un bucket de Supabase Storage llamado `codevsys-web`. Se generan enlaces de descarga temporales (signed URLs) para que los usuarios puedan acceder a los brochures de forma segura.
- **Base de datos para suscripción a newsletter**: Los datos de suscripción (email, fecha, tipo, descripción) se almacenan en la tabla `subscription` de la base de datos Supabase, permitiendo una gestión sencilla y segura de los suscriptores.

La integración se realiza desde el backend (API routes) mediante el SDK oficial de Supabase (`@supabase/supabase-js`).

---

## Notas adicionales
- Para estilos personalizados, usa utilidades de Tailwind y la directiva `@apply` en los CSS.
- Si tienes dudas sobre la configuración, revisa los archivos de configuración en la raíz del proyecto.

Si necesitas más detalles o ayuda para contribuir, contacta al equipo de Codevsys.

---

## Cómo agregar un nuevo post al blog: Frontmatter explicado

Cada post del blog se define mediante un archivo Markdown en `src/content/blog/`. En la cabecera (frontmatter) de cada archivo, se deben incluir los siguientes campos:

```yaml
title: "Título del post"
excerpt: "Resumen breve para listados y SEO"
featuredImage: "./images/imagen_destacada.jpg"
publishDate: "YYYY-MM-DD"
publish: true # true para publicar, false para ocultar
categories: ["Categoría1", "Categoría2"]

seo:
  title: "Título SEO"
  description: "Descripción SEO"

# Opcionales para Call-to-Action (CTA) de Brochure
showBrochure: true # Muestra un bloque CTA de descarga
brochureText: "Texto principal del CTA"
brochureButtonText: "Texto del botón (opcional, por defecto 'Descargar')"
brochureLink: "#ancla-o-link" # (opcional, por defecto '#subscription')

# Opcionales para sección de Suscripción/Descarga
showSubscription: true # Muestra formulario de suscripción/descarga
subscriptionContent:
  eyebrow: "Texto pequeño sobre el formulario"
  headline: "Título destacado del formulario"
  description: "Descripción del beneficio o recurso"
  image: "ruta/imagen.png" # (opcional)
  imageAlt: "Texto alternativo de la imagen"
  newsLetterForm:
    - title: "Título del recurso a descargar"
      description: "Descripción del recurso"
      successTitle: "Título de éxito tras descargar"
      successMessage: "Mensaje de éxito tras descargar"
      buttonText: "Texto del botón de descarga"
      fileDownload: "archivo.pdf"

# Opcional: Para SEO avanzado para SEO
jsonLdString: >
  {...}
```

> **Nota:** `jsonLdString` permite agregar datos estructurados en formato [JSON-LD](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) para mejorar la visibilidad SEO en buscadores como Google. Puedes personalizar los campos según el contenido de tu post.


### Explicación de cada campo

- **title**: Título principal del post (visible en la página y listados).
- **excerpt**: Resumen breve para mostrar en listados y SEO.
- **featuredImage**: Imagen destacada que se muestra en el listado y cabecera del post.
- **publishDate**: Fecha de publicación (formato YYYY-MM-DD).
- **publish**: Si es `true`, el post será visible en el blog.
- **categories**: Lista de categorías o etiquetas para clasificar el post.
- **seo.title** y **seo.description**: Título y descripción para motores de búsqueda.

#### Campos para Call-to-Action (CTA) de Brochure
- **showBrochure**: Si es `true`, muestra una sección CTA con botón destacado.
- **brochureText**: Texto principal del CTA (mensaje de invitación o descarga).
- **brochureButtonText**: Texto del botón (opcional, por defecto 'Descargar').
- **brochureLink**: Link o ancla para el botón (opcional, por defecto '#subscription').

#### Campos para sección de Suscripción/Descarga
- **showSubscription**: Si es `true`, muestra una sección de suscripción o descarga de recurso.
- **subscriptionContent**: Objeto con la información del formulario y recurso a descargar.
  - **eyebrow**: Texto pequeño sobre el formulario (opcional).
  - **headline**: Título destacado del formulario.
  - **description**: Descripción del recurso o beneficio.
  - **image**: Imagen opcional para mostrar junto al formulario.
  - **imageAlt**: Texto alternativo de la imagen.
  - **newsLetterForm**: Lista de recursos descargables, cada uno con:
    - **title**: Título del recurso.
    - **description**: Descripción del recurso.
    - **successTitle**: Título mostrado tras descargar.
    - **successMessage**: Mensaje mostrado tras descargar.
    - **buttonText**: Texto del botón de descarga.
    - **fileDownload**: Nombre del archivo a descargar.

#### SEO avanzado
- **jsonLdString**: Permite definir datos estructurados en formato JSON-LD para SEO avanzado (opcional).

---

**Ejemplo completo:**

```yaml
title: "¿Qué es NERC-CIP?"
excerpt: "El Estándar de Ciberseguridad para el Sector Eléctrico Chileno"
featuredImage: "./images/ciberseguridad_NERC-CIP.webp"
publishDate: "2024-12-23"
publish: true
categories: ["Ciberseguridad", "NERC-CIP"]
seo:
  title: "Qué es Nerc-CIP"
  description: "El Estándar de Ciberseguridad para el Sector Eléctrico Chileno"
showBrochure: true
brochureText: "¿Quieres la guía de implementación NERC-CIP PDF?"
brochureButtonText: "Descargar Guía Ahora"
# brochureLink: "#id-del-formulario-especifico" # Opcional
showSubscription: true
subscriptionContent:
  eyebrow: "Seguridad Operacional"
  headline: "Descarga la Guía de Implementación NERC-CIP PDF"
  description: "Implementación por fases, control de ciberactivos, respuesta a incidentes y cumplimiento regulatorio para el sector eléctrico chileno."
  imageAlt: "Portada Guía NERC-CIP"
  newsLetterForm:
    - title: "¡Descarga la Guía Técnica NERC-CIP PDF!"
      description: "Incluye categorización de impacto, estructura de roles, fases de implementación, controles técnicos y mejores prácticas. Ideal para generadoras, transmisoras y centros de control OT."
      successTitle: "¡Descarga exitosa!"
      successMessage: "Gracias por descargar nuestra guía. Revisa tu carpeta de descargas o tu correo electrónico si fue enviado automáticamente."
      buttonText: "Descargar ahora"
      fileDownload: "Guia_Implementacion_NERC_CIP.pdf"
jsonLdString: >
jsonLdString: >
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "¿Qué es NERC-CIP? El estándar de ciberseguridad para el sector eléctrico chileno",
    "description": "Conoce el estándar NERC-CIP y cómo su implementación fortalece la ciberseguridad, el cumplimiento normativo y las mejores prácticas en empresas del sector eléctrico en Chile. Descubre recomendaciones clave y recursos para asegurar la continuidad operacional y la protección de infraestructuras críticas. Descarga la guía de implementación de NERC-CIP en PDF.",
    "datePublished": "2024-12-23T00:00:00-04:00",
    "author": {
      "@type": "Organization",
      "name": "Codevsys",
      "url": "https://www.codevsys.cl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Codevsys",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.codevsys.cl/images/logo.png"
      }
    }
  }

```

