# Pollos Misión — Landing (link en bio)

Página de enlaces para **Pollos Misión**: menú, WhatsApp, Facebook, Instagram y TikTok en un solo lugar.

El repositorio contiene dos implementaciones independientes de la misma interfaz, cada una con su propio `package.json`:

| Carpeta    | Stack                                        | Estado                    |
|------------|----------------------------------------------|---------------------------|
| `angular/` | Angular 12, Bootstrap 5, bootstrap-icons     | Original, en producción   |
| `react/`   | React 18, TypeScript, Vite, Tailwind         | Réplica en desarrollo     |

## Enlaces

Los enlaces están duplicados en ambos proyectos; si cambias uno, actualiza el otro:

- Angular: `angular/src/app/core/link.service.ts`
- React: `react/src/data/content.ts`

Cada enlace tiene `label`, `url`, `icon` (clase de bootstrap-icons, p. ej. `bi-whatsapp`) y los indicadores opcionales `highlight` (botón principal) y `social` (botón de red social).

## Angular

```bash
cd angular
nvm install 16 && nvm use 16   # Angular 12 requiere Node 16
npm install
npm start      # servidor de desarrollo (ng serve) en http://localhost:4200
npm test       # pruebas con Karma/Jasmine (requiere Chrome)
npm run build
```

### Despliegue

El despliegue es automático con GitHub Actions (`.github/workflows/deploy.yml`) y se publica en <https://pollosmision.github.io/lp/>.

- **Push a `main`:** compila Angular (Node 16, necesario para Angular 12) con `base-href` de producción y lo publica en GitHub Pages.
- **Pull requests:** solo compila, sin publicar.
- **Manual:** pestaña *Actions* → *Build & Deploy* → *Run workflow*.
- **React:** el workflow también ejecuta `typecheck` y `build` de `react/`, pero no bloquea el despliegue (`continue-on-error`) mientras la réplica esté en desarrollo.

Requisito único: en *Settings → Pages → Source* debe estar seleccionado **GitHub Actions**.

Build manual (opcional):

```bash
cd angular
ng build --configuration production --output-path=dist-pages --base-href='https://pollosmision.github.io/lp/'
```

> `angular/docs/` es el resultado del despliegue manual anterior. Ya no se usa una vez que Pages apunta a GitHub Actions.

## React

```bash
cd react
npm install
npm run dev         # servidor de desarrollo (Vite)
npm run build
npm run typecheck   # tsc --noEmit
```

## SEO

El SEO está en `angular/src/index.html` (la versión publicada):

- `title`, `description`, `canonical` y `lang="es"`.
- Open Graph y Twitter Card, con imagen en `angular/src/assets/seo/og-image.jpg`.
- Datos estructurados JSON-LD (`Restaurant`). Falta agregar dirección y horario reales.
- Iconos (favicon, `apple-touch-icon`, manifest) en `angular/src/assets/seo/`.
- `robots.txt` y `sitemap.xml` en `angular/src/`.

Pasos manuales: registrar `https://pollosmision.github.io/lp/` en Google Search Console, enviar el sitemap y crear un perfil en Google Business Profile.

## Herramientas de diseño (Claude Code)

- Skills de proyecto en `.claude/skills/`: `emil-design-eng`, `impeccable` y `playwright-cli`.
- `design-taste-frontend` pesa ~40 MB y está en `.gitignore`: instálalo en local.
- `.mcp.json` declara el servidor MCP de Figma. Autoriza con `/mcp` en Claude Code.

## Recursos

- Generador de QR: <https://www.qrcreator.com/es-ES/my-qr-codes>
- Página de referencia (copia): <https://www.atom.bio/pollosmision>
