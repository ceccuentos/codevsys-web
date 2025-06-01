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
