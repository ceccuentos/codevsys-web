# Especificaciones de la Página Web

## Descripción General
Este proyecto es una página web desarrollada con [Astro](https://astro.build/) y utiliza Tailwind CSS para los estilos. El objetivo es proveer una plataforma moderna, rápida y fácil de mantener para Codevsys.

## Tecnologías principales
- **Astro**: Framework para construir sitios web rápidos y modernos.
- **Tailwind CSS**: Utilizado para la creación rápida de estilos mediante clases utilitarias.
- **TypeScript**: Tipado estático para JavaScript, mejora la mantenibilidad y escalabilidad.
- **PostCSS** y **Autoprefixer**: Procesamiento de CSS y compatibilidad entre navegadores.

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

## Notas adicionales
- Para estilos personalizados, usa utilidades de Tailwind y la directiva `@apply` en los CSS.
- Si tienes dudas sobre la configuración, revisa los archivos de configuración en la raíz del proyecto.

Si necesitas más detalles o ayuda para contribuir, contacta al equipo de Codevsys.
