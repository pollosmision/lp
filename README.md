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
npm install
npm start      # servidor de desarrollo (ng serve)
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

## Recursos

- Generador de QR: <https://www.qrcreator.com/es-ES/my-qr-codes>
- Página de referencia (copia): <https://www.atom.bio/pollosmision>
