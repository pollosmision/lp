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

El resultado compilado se versiona en `angular/docs/` y se publica con GitHub Pages en <https://pollosmision.github.io/lp/>:

```bash
cd angular
ng build --prod=true --outputPath=docs --baseHref='https://pollosmision.github.io/lp/'
```

Luego haz commit y push de `angular/docs/`.

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
