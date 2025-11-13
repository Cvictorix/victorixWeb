# Guía de Deployment en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración en GitHub

Para activar el deployment automático, sigue estos pasos:

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/Cvictorix/victorixWeb`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source** (Fuente), selecciona: **GitHub Actions**

### 2. Hacer merge de la rama a main

Una vez que hagas merge de tu rama actual a `main`, el workflow se ejecutará automáticamente y desplegará tu sitio.

## URL del Sitio

Una vez desplegado, tu portafolio estará disponible en:

```
https://cvictorix.github.io/victorixWeb/
```

## Deployment Automático

El sitio se desplegará automáticamente cuando:
- Hagas push a la rama `main`
- O manualmente desde la pestaña "Actions" en GitHub

## Estructura de Deployment

```
.github/workflows/deploy.yml  # Workflow de GitHub Actions
vite.config.js                # Configuración de Vite con base path
dist/                         # Carpeta de build (generada automáticamente)
```

## Comandos Locales

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Verificar el Deployment

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Una vez completado (✓ verde), tu sitio estará en vivo

## Troubleshooting

Si el sitio no se despliega:

1. Verifica que GitHub Pages esté habilitado en Settings > Pages
2. Asegúrate de que la fuente sea "GitHub Actions"
3. Revisa los logs en la pestaña "Actions" para ver errores
4. Verifica que la rama `main` tenga los últimos cambios

## Personalización

Para cambiar el nombre del repositorio o la URL:

1. Actualiza el `base` en `vite.config.js`
2. El formato es: `base: '/nombre-del-repo/'`
