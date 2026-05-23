# CCC-UACh — Sitio web (réplica para desarrollo)

Réplica del sitio del **Centro Clínico Comunitario UACh** (`https://www.ccc-uach.cl/`) construida en HTML/CSS/JS estático, pensada como base para continuar el desarrollo del proyecto.

## Estructura

```
CCC UACH WEB/
├── index.html                # Página de inicio
├── pages/
│   ├── quienes-somos.html    # Misión, visión, equipo
│   ├── que-hacemos.html      # 4 áreas: prevención, tratamiento, seguimiento, investigación
│   ├── noticias.html         # Listado de noticias y eventos
│   ├── informate.html        # Recursos e información
│   ├── contacto.html         # Formulario + mapa + datos
│   └── galeria.html          # Galería con lightbox
├── assets/
│   ├── css/styles.css        # Estilos completos (responsive)
│   ├── js/main.js            # Menú móvil, animaciones, lightbox, año dinámico
│   └── img/                  # Logos y fotos descargadas del sitio original
└── README.md
```

## Páginas incluidas

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `index.html` | Hero, áreas de trabajo, noticias destacadas, CTA |
| ¿Quiénes Somos? | `pages/quienes-somos.html` | Misión, visión, valores, equipo |
| ¿Qué Hacemos? | `pages/que-hacemos.html` | Las 4 áreas con anchors (#prevencion, #tratamiento, #seguimiento, #investigacion) |
| Noticias y Eventos | `pages/noticias.html` | Grid de noticias con imágenes |
| Infórmate | `pages/informate.html` | Cards de recursos |
| Contacto | `pages/contacto.html` | Formulario, info de contacto y mapa de Google Maps |
| Galería | `pages/galeria.html` | Grid de imágenes con lightbox |

## Recursos descargados desde el sitio original

- `logo-color.png` — logo a color
- `logo-blanco.png` — logo en blanco para footer
- `banner-horizontal.jpg` — imagen del hero/page-header
- `noticia-intendente.jpg`, `noticia-infraestructura.jpg`, `noticia-donacion.jpg` — imágenes de noticias

## Diseño

- **Paleta:** azul institucional `#0a3d7a` / acento `#2c8acf` / blanco
- **Tipografías:** Montserrat (titulares) + Open Sans (cuerpo) vía Google Fonts
- **Iconos:** Font Awesome 6 (CDN)
- **Responsive:** breakpoints en 992px y 768px (menú hamburguesa móvil)

## Cómo correrlo

Es estático puro — no requiere build. Opciones:

```powershell
# Opción 1: abrir directamente en el navegador
start index.html

# Opción 2: servidor local (recomendado para que carguen bien los assets relativos)
python -m http.server 8000
# luego visita http://localhost:8000

# Opción 3: con Node
npx serve .
```

## Funcionalidades JS

- Menú hamburguesa en móvil
- Animaciones fade-in al hacer scroll (IntersectionObserver)
- Scroll suave para anchors internos
- Lightbox simple para la galería
- Año dinámico en el footer

## Próximos pasos sugeridos

- Migrar a un framework (Astro/Next/Vite) si se quiere CMS
- Conectar el formulario a un backend o servicio (Formspree, EmailJS, Supabase)
- Reemplazar las imágenes de relleno de la galería por fotos reales
- Añadir páginas individuales de noticias
- Optimizar imágenes (WebP, lazy loading)
- SEO: sitemap.xml, robots.txt, Open Graph tags
