# Guía de Deployment en GitHub Pages con gh-pages

Este proyecto está configurado para desplegarse fácilmente en GitHub Pages usando el paquete `gh-pages`.

## 🚀 Deployment Rápido

Para desplegar tu portafolio, simplemente ejecuta:

```bash
npm run deploy
```

¡Eso es todo! Este comando:
1. Construye automáticamente tu proyecto (`npm run build`)
2. Despliega la carpeta `dist/` a GitHub Pages
3. Crea/actualiza la rama `gh-pages` automáticamente

## 📍 URL del Sitio

Una vez desplegado, tu portafolio estará disponible en:

```
https://cvictorix.github.io/victorixWeb/
```

## ⚙️ Configuración Inicial (Solo una vez)

### 1. Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/Cvictorix/victorixWeb`
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source** (Fuente), selecciona: **Deploy from a branch**
5. En **Branch**, selecciona: **gh-pages** y carpeta **/ (root)**
6. Click en **Save**

**Nota:** La rama `gh-pages` se creará automáticamente la primera vez que ejecutes `npm run deploy`

### 2. Esperar unos minutos

Después del primer deployment, GitHub Pages puede tardar 2-5 minutos en activarse.

## 📝 Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build local
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

## 🔄 Workflow de Desarrollo

1. Haz cambios en tu código
2. Prueba localmente con `npm run dev`
3. Cuando estés listo para desplegar:
   ```bash
   git add .
   git commit -m "Tu mensaje"
   git push
   npm run deploy
   ```

## 🔍 Verificar el Deployment

1. Ejecuta `npm run deploy`
2. Espera a que termine (verás "Published" en la consola)
3. Ve a `https://cvictorix.github.io/victorixWeb/`
4. Si no ves cambios, espera 2-3 minutos y recarga (Ctrl+F5)

## 🛠️ Troubleshooting

### El sitio no se visualiza

**Solución 1:** Verifica la configuración de GitHub Pages
- Settings > Pages
- Source debe ser "Deploy from a branch"
- Branch debe ser "gh-pages" / (root)

**Solución 2:** Limpia el caché del navegador
- Presiona Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (Mac)

**Solución 3:** Verifica que el deployment se completó
```bash
# Deberías ver el mensaje: "Published"
npm run deploy
```

**Solución 4:** Revisa que la rama gh-pages existe
```bash
git branch -a
# Deberías ver: remotes/origin/gh-pages
```

### Error de permisos al desplegar

Asegúrate de tener permisos de escritura en el repositorio y que estés autenticado en git:

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

## 📦 Estructura de Deployment

```
vite.config.js                # Configuración con base: '/victorixWeb/'
package.json                  # Scripts de deploy configurados
dist/                         # Carpeta de build (generada automáticamente)
gh-pages                      # Rama remota para GitHub Pages (automática)
```

## ✨ Actualizar el Sitio

Cada vez que quieras actualizar tu portafolio en línea:

```bash
npm run deploy
```

Los cambios aparecerán en 1-3 minutos.

## 🎨 Personalización

Para cambiar el nombre del repositorio o la URL:

1. Actualiza el `base` en `vite.config.js`:
   ```js
   base: '/nuevo-nombre-repo/',
   ```
2. Ejecuta `npm run deploy` de nuevo
