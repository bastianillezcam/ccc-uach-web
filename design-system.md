# Sistema de diseno — Centro Comunitario UACh

> Generado por `/gamma:designer` · 2026-05-25
> Brand: `5a2b5edc-9789-4bd1-8310-00919600f4f3` · Project: `c9feddd2-e8e9-4252-9424-38a25c35a724`

## Origen

| | |
|---|---|
| **Marca** | Centro Comunitario UACh (CCC-UACh) |
| **Industria** | Salud y bienestar comunitario |
| **Localidad** | Puerto Montt, Region de Los Lagos, Chile |
| **Brand archetype** | Caregiver |
| **Tono de voz** | Profesional, amable y serio. Academico con calidez humana. Mas formal que cercano. |
| **Stack target** | HTML estatico (continuidad con repo actual) |
| **Repo** | `C:\Users\Nakam\Documents\PROYECTOS GITHUB\CCC UACH WEB` |

## Modo de operacion

**Extract from existing site.** WebFetch a `ccc-uach.cl` + lectura del logo oficial en `/assets/img/logo-color.png` confirmaron que la identidad visual real es **teal/turquoise + gold + coral** — NO el azul institucional del clon HTML actual del repo.

Decision: respetamos la identidad ORIGINAL (la del logo), no la del clon. El clon en `assets/css/styles.css` usa `#0a3d7a` (institutional blue) — eso se descarta a favor del teal `#3cb4a8` derivado del logo.

## Paleta

### Primary — Teal (extraido del logo)
- `--color-primary-500: #3cb4a8` ★ — teal principal del isotipo (4 ovalos)
- `--color-primary-600: #2c9b8f` — color del texto "COMUNITARIO" en el wordmark
- Escala 50-900 derivada con HSL ajustado para mantener temperatura

**Por que teal:** el logo es el documento mas confiable de la identidad visual. El teal evoca **salud + calma + comunidad + organico** — perfecto para el archetype caregiver y el tono "formal pero calido" pedido por Alpha. Contraste AA contra blanco.

### Accent gold — `#f5c04d`
Del swoosh amarillo del logo (la "rendija" curva). Uso reservado para CTAs primarios de conversion (WhatsApp), badges y acentos sticky. **No usar para texto** sobre fondo claro — contraste fail.

### Accent coral — `#f4a8a0`
Del ovalo rosado del logo. Uso para iconos de cards de "familia/empatia" y backgrounds suaves. Evoca calidez sin saturar.

### Accent lime — `#c5d169`
Del ovalo verde-amarillo del logo. Uso decorativo, badges minoritarios. Frecuencia baja para no romper la jerarquia.

### Neutrales
Escala de 10 tonos de gris neutro (no warm, no cool) tirando ligeramente al teal para coherencia subliminal. `--color-neutral-800: #1f262e` para body text (contraste AAA contra blanco).

## Tipografia

| Rol | Familia | Por que |
|---|---|---|
| Headings | Montserrat 600/700 | Continuidad con el clon del repo. Sans humanista, legible, gratis en Google Fonts. x-height alta. |
| Body | Open Sans 400/600/700 | Idem continuidad. Optimizada para pantallas, x-height alta, soporte subset latin solido. |
| Mono | system-ui mono | Solo para fragmentos de codigo / hex. No requiere font web. |

**Modular scale 1.25 (Major Third)** — balance entre jerarquia visible y suavidad para contenido editorial largo. Mas suave que 1.333, mas marcado que 1.2.

Body base: **16px**. Articulos: **18px** (`--text-md`) — mejor lectura en contenido largo.

## Espaciado

Escala 1.25 alineada con tipografia. Base 16px (`--space-4`).

- Componentes inline: 1-3 (4-12px)
- Componentes block: 4-8 (16-32px)
- Section padding: 16-24 (64-96px)

## Layout

| Container | Max-width | Uso |
|---|---|---|
| `--container-prose` | 65ch | Cuerpo de articulos — ancho optimo de lectura (50-75 chars/linea) |
| `--container-narrow` | 720px | Articulos blog L4 |
| `--container-base` | 960px | Contenido mediano |
| `--container-wide` | 1200px | Hero + grids de cards |

Gutter `1.5rem` (24px) para padding lateral en mobile y tablet.

## Performance budget

| Metrica | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s (objetivo 2.0s) |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | >= 90 |
| Lighthouse Accessibility | >= 95 |
| Lighthouse SEO | = 100 |
| Bundle CSS gzipped | < 50KB (tokens.css + components.css ≈ 14KB raw → ~4KB gzipped) |
| Bundle JS gzipped | < 30KB (script inline minimo) |
| Hero image | < 120KB WebP |
| Articles images | < 80KB WebP cada una |

## Accesibilidad — WCAG 2.1 AA mas alto

- Contraste cuerpo: 4.5:1 minimo (cumplido con neutral-800 / white)
- Contraste headings: 3:1 minimo en tamano >=24px
- Focus visible custom (`--shadow-focus`) — nunca eliminar outline
- ARIA landmarks: `header`, `nav`, `main`, `aside`, `footer`, `complementary`
- Skip-link al inicio del body
- `prefers-color-scheme: dark` soportado (opcional via tokens)
- `prefers-reduced-motion: reduce` respetado (anula transitions)
- Heading hierarchy estricta: 1 H1, jerarquia descendente sin saltos
- Alt text descriptivo en todas las imagenes (responsabilidad de `/gamma:image-planner`)
- Touch targets >= 44x44px en mobile
- Labels asociados a inputs (form contacto)

## Decisiones explicitas

### Lo que NO hacemos

- **NO carruseles** — matan SEO, mata accesibilidad, scroll de tap targets en mobile
- **NO modales intersticiales** en primera vista — penalizacion Google 2017+
- **NO video autoplay en hero** — mata LCP, gasta data en mobile
- **NO texto blanco sobre imagen sin overlay** — contraste fail
- **NO CSS-in-JS sin SSR** — anti-SEO en sites estaticos
- **NO frameworks pesados** — vanilla HTML/CSS/JS alcanza para sites de 50-300 paginas editoriales
- **NO sliders/parallax en mobile** — mata performance y accesibilidad
- **NO emoji decorativos** — el tono pedido por Alpha es "profesional con calidez", no infantil. Iconografia SVG inline cuando sea necesario.

### Lo que SI hacemos

- **SI FAQ con `<details>/<summary>`** nativos — cero JS, accesible por default, schema-ready
- **SI breadcrumbs visibles + schema BreadcrumbList** — rich result importante post-may-2026
- **SI dark mode automatico** via `prefers-color-scheme` — sin toggle JS
- **SI fonts con `font-display: swap`** — evita FOIT y mejora LCP
- **SI imagenes con `loading="lazy"` + WebP** (responsabilidad de publish-to-site)
- **SI CSS inline en `<head>` para critical path** (publish-to-site lo inyecta)
- **SI HTML5 semantico estricto** — cero div soup
- **SI mobile-first** — defaults son mobile, media queries son `min-width`

## Estructura de archivos

```
CCC UACH WEB/
├── design-system/
│   ├── tokens.css                 ← CSS variables (color, type, spacing, motion)
│   ├── components.css             ← Estilos de los 12+ componentes
│   ├── style-guide.html           ← Preview navegable
│   ├── components/
│   │   ├── topbar.html            ← Topbar con direccion, telefono, email, redes
│   │   ├── header.html            ← Logo + nav principal + CTA WhatsApp
│   │   ├── footer.html            ← Links secundarios + datos institucionales
│   │   ├── breadcrumb.html        ← Schema BreadcrumbList ready
│   │   └── cta-banner.html        ← CTA final de articulos
│   └── templates/
│       ├── home.html              ← L1 — Hero + 4 areas + diferenciadores + CTA
│       ├── hub.html               ← L2 — Intro + child cards + FAQ + CTA
│       ├── pillar.html            ← L3 — Article + sidebar + FAQ + CTA (mas usado)
│       └── longtail.html          ← L4 — Article compacto sin sidebar
├── design-system.md               ← Este documento
└── assets/                        ← Heredado del clon: img/, css/, js/
```

## Mapeo niveles pipeline -> template

| Nivel SEO | Cantidad CCC UACH | Template |
|---|---|---|
| L1 (home) | 1 | `home.html` |
| L2 (hub/pillar) | 3 | `hub.html` |
| L3 (pillar/blog) | 8 | `pillar.html` |
| L4 (longtail blog) | 32 | `longtail.html` |

## Componentes — inventario

| Componente | Archivo | Schema-ready | Notas |
|---|---|---|---|
| Topbar | components/topbar.html | — | Telefono +56 65 222 7817 + WhatsApp +56 9 4163 8395 |
| Header | components/header.html | — | Nav + CTA WhatsApp visible |
| Footer | components/footer.html | — | Links + dir + tel + email + Instagram |
| Breadcrumb | components/breadcrumb.html | BreadcrumbList | Placeholders por nivel |
| CTA banner | components/cta-banner.html | — | Full y compact variants |
| TL;DR box | components.css (sin partial) | — | Front-load 60-word resumen |
| Hero | components.css (en home.html) | — | Solo L1, no L2-L4 |
| Section title | components.css | — | Reutilizable en cualquier seccion |
| Card grid | components.css | — | Variants: 2, 3, 4 columnas |
| Card | components.css | — | Icon + title + body + link, hover lift |
| FAQ accordion | components.css | FAQPage (opcional) | `<details>/<summary>` nativo |
| Comparison table | components.css | — | Stack en mobile con `data-label` |
| Sidebar related | components.css | — | Lecturas relacionadas, inyectado por linker |
| Author byline | components.css | Person (opcional) | Solo para articulos con autor identificado |
| Tag chip | components.css | — | Pildora categoria/cluster, 3 colores |
| Contact card | components.css | — | Para contacto.html y CTA banners |

## Schema markup base por template

| Template | Schemas en `<head>` |
|---|---|
| home.html | `MedicalBusiness` + `Organization` |
| hub.html | `CollectionPage` + `BreadcrumbList` |
| pillar.html | `Article` + `BreadcrumbList` (+ `FAQPage` si tiene seccion FAQ) |
| longtail.html | `Article` + `BreadcrumbList` |

**Responsabilidad de `/gamma:schema-emitter`** llenar dinamicamente los slots `{{...}}` por pagina.

## Datos del centro (a inyectar en publish-to-site)

```
Nombre comercial:  Centro Comunitario UACh
Razon social:      Universidad Austral de Chile
Direccion:         27 de Abril 565, Puerto Montt, Region de Los Lagos, Chile
Telefono:          +56 65 222 7817
WhatsApp:          +56 9 4163 8395 (wa.me/56941638395)
Email:             contacto@ccc-uach.cl
Instagram:         @ccc_uach (https://www.instagram.com/ccc_uach/)
Horario:           Lunes a Viernes, 09:00 a 18:00
Modalidad:         Ambulatorio intensivo gratuito
Especialidad:      Consumo problematico de alcohol y otras sustancias
Equipo:            17 profesionales (psicologos, psiquiatras, medicos,
                   trabajadores sociales, terapeutas ocupacionales)
Partners:          UACh, SENDA, Club de Leones, Gobierno Regional Los Lagos
```

## Imagenes disponibles en repo (heredadas del clon)

| Archivo | Tipo | Uso sugerido |
|---|---|---|
| `assets/img/logo-color.png` | Logo principal | Header + favicon |
| `assets/img/logo-blanco.png` | Logo blanco | Footer (sobre fondo teal-900) |
| `assets/img/banner-horizontal.jpg` | Banner | OG image fallback |
| `assets/img/noticia-intendente.jpg` | Foto evento | Pagina noticias |
| `assets/img/noticia-infraestructura.jpg` | Foto interior centro | Hero alternative / about |
| `assets/img/noticia-donacion.jpg` | Foto Club de Leones | Pagina partnerships |

**Pendiente** (responsabilidad de `/gamma:image-planner`):
- Foto profesionales en accion
- Foto fachada del centro
- Foto exterior 27 de Abril 565
- Infografia "modelo biopsicosocial"
- Hero photo para `recursos/index.html`

## Filosofia

> **El sitio mas bonito es el que la abuela del cliente puede usar Y la IA puede citar verbatim.**

Diseno SEO-friendly no significa feo. Significa intencional. Cada pixel se gana su lugar — o ayuda al usuario a entender, o ayuda al buscador a indexar, o ayuda a la IA a citar. Si no hace ninguna de las tres, sobra.

## Version

`v1.0.0` — 2026-05-25 — Generado inicial por `/gamma:designer`.

Cambios futuros documentar aqui con bump semver.
