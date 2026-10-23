---
name: Florería Eben Ezer
description: El rosado del estudio donde se fotografía cada arreglo (la combarbalita de la región) es la losa de la página entera; vino y tinta son sus vetas, frambuesa la acción
colors:
  rosa: "#E7B7B4"
  rosa-light: "#F3D6D3"
  rosa-deep: "#D39C98"
  vino: "#5A1F2E"
  tinta: "#2E1219"
  frambuesa: "#8B1E3F"
  frambuesa-light: "#A62C50"
  ocre: "#C98A3F"
  blanco: "#FFFFFF"
  blanco-soft: "#EBCFCB"
  tinta-soft: "#6B3A44"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 2.2vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  mark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 9.2vw, 9.5rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "normal"
    fontVariation: "'wdth' 125"
rounded:
  none: "0px"
spacing:
  seam-xs: "4px"
  seam-sm: "6px"
  seam: "8px"
  seam-lg: "12px"
  margin: "clamp(1rem, 2.2vw, 2rem)"
  gutter: "clamp(0.75rem, 1.6vw, 1.5rem)"
  section-half: "clamp(3rem, 5.5vw, 6.5rem)"
  section: "clamp(6rem, 11vw, 13rem)"
components:
  button-wa:
    backgroundColor: "{colors.frambuesa}"
    textColor: "{colors.blanco}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-wa-hover:
    backgroundColor: "{colors.frambuesa-light}"
    textColor: "{colors.blanco}"
  button-ghost:
    backgroundColor: "{colors.vino}"
    textColor: "{colors.blanco}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
  button-order:
    backgroundColor: "{colors.frambuesa}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  chip-filter:
    backgroundColor: "{colors.rosa-light}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  chip-filter-hover:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
  chip-filter-active:
    backgroundColor: "{colors.frambuesa}"
    textColor: "{colors.blanco}"
  input-search:
    backgroundColor: "{colors.rosa-light}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.5rem"
  nav-bar:
    backgroundColor: "{colors.rosa}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    padding: "0.6rem 0"
    height: "64px"
  cell-contact:
    backgroundColor: "{colors.rosa-light}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
    height: "96px"
  cell-contact-inverse:
    backgroundColor: "{colors.frambuesa}"
    textColor: "{colors.blanco}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
    height: "96px"
  tile-text:
    backgroundColor: "{colors.vino}"
    textColor: "{colors.blanco}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px"
  tile-text-rosa:
    backgroundColor: "{colors.rosa-light}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px"
  tile-text-ocre:
    backgroundColor: "{colors.ocre}"
    textColor: "{colors.tinta}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "24px"
  product-slab:
    backgroundColor: "{colors.rosa-deep}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Florería Eben Ezer

## Overview

**Creative North Star: "La losa de combarbalita"**

Eben Ezer quiere decir piedra de ayuda, y el sitio toma esa piedra y la hace combarbalita, la piedra rosada de la Región de Coquimbo: la página entera es el mismo rosado de estudio sobre el que la florería fotografía cada arreglo, de modo que las fotos no se recortan ni se enmarcan, se apoyan directamente en el suelo y los ramos quedan flotando como piezas de colección, con nombre, referencia y precio como ficha de museo. Las vetas oscuras de la piedra (vino y tinta) son los campos de contraste y un solo rojo frambuesa marca lo que se toca para pedir. No hay decoración que compita con la foto, porque el color se aplica como campo entero.

La densidad es alta pero ordenada, las secciones son bloques de color que se tocan con costuras de 4 a 12 px, nunca con líneas, y el texto se apoya en una sola familia variable, Archivo, que se ensancha para los titulares y vuelve a su ancho normal para leer. El movimiento sirve al pedido: la vitrina en arco del hero se desliza con scroll nativo y cambia nombre, dato y mensaje de WhatsApp bajo el pulgar, lo demás son entradas escalonadas de una sola vez y un ligero acercamiento de la foto al pasar el cursor.

Rechazos confirmados por el contrato de dirección y por el código: sin hero de video con tres tarjetas de servicio, sin carrusel con flechas ni contador, sin sombras, sin líneas divisorias, sin degradados, sin esquinas redondeadas, sin iconos decorativos (el único glifo es la marca de WhatsApp dentro del botón y los iconos funcionales de zoom y volver arriba).

**Key Characteristics:**
- Campos de color enteros (rosa, rosa claro, vino, tinta, ocre) separan las secciones; el paso de tono reemplaza líneas y sombras.
- Frambuesa para la acción principal y los estados activos, con texto blanco; es el único color saturado del sitio.
- Una familia, Archivo variable autoalojada, con el eje de ancho (118 % titulares, 125 % la marca, 100 % texto) como única voz tipográfica.
- Esquinas cuadradas en todo, fotos 1:1 sin tratamiento, costuras de 4–12 px entre losas.
- Cifras tabulares en precios, referencias y teléfonos.
- Motion con snap nativo, entradas una sola vez, respeto a `prefers-reduced-motion`.

## Colors

Una paleta sacada de las fotos: el fondo rosado de estudio medido en los 37 arreglos (promedio #E3ACAB) fija el suelo, y el resto son los tonos que la combarbalita tiene en sus vetas (rosa claro, rosa hondo, vino, tinta, ocre). La acción es un solo rojo frambuesa.

### Primary
- **Rosa de estudio** (`--rosa`): el suelo del sitio, fondo del `body`, de la barra sticky, del hero y del catálogo; tinta encima. Es a propósito el mismo tono que el fondo de las fotos, así cada arreglo se apoya en la página sin borde.
- **Rosa claro** (`--rosa-light`): el paso de tono sobre el suelo; campo de "Zonas de Servicio" y del cierre del catálogo, losas de texto claras del mosaico, buscador y chips de filtro en reposo, celdas de contacto.
- **Rosa hondo** (`--rosa-deep`): losa que se ve bajo cada foto mientras carga (vitrina, fila, catálogo, lightbox) y bloques de la marca.

### Secondary
- **Vino** (`--vino`): el campo oscuro, las vetas de la piedra; "Arreglos más pedidos", losas de texto oscuras del mosaico, botón fantasma, footer, contenido del lightbox, texto de la marca en bloques.
- **Tinta** (`--tinta`): el texto sobre campos claros, el campo del cierre con video, hover del botón fantasma, fondo del icono de zoom y, al 92 %, el velo del lightbox.
- **Frambuesa** (`--frambuesa`): la acción. Botón "Pedir por WhatsApp" en todas sus apariciones, botón de pedido en cada ficha del catálogo, chip de filtro activo, selección de texto, anillo de foco (3 px) sobre campos claros, color de subrayado de los enlaces, subtítulos de zona (`.lineup-part`), celda invertida de contacto, botón cerrar del lightbox y botón volver arriba. **Frambuesa clara** (`--frambuesa-light`) es su hover.

### Tertiary
- **Ocre** (`--ocre`): la veta dorada de la combarbalita; campo entero de "Contáctanos", losa de texto "Flores Secas" en el mosaico y bloques de la marca.

### Neutral
- **Blanco** (`--blanco`): texto principal sobre vino y tinta, hover de las celdas de contacto y de los chips, bloque N de la marca.
- **Blanco teñido** (`--blanco-soft`): texto secundario sobre vino y tinta (datos de la pieza en "más pedidos", notas del footer, párrafos de las losas oscuras); lleva el rosado del mundo en vez de ser un gris.
- **Tinta suave** (`--tinta-soft`): texto secundario sobre rosa, rosa claro y ocre (dato de la pieza del hero, referencias, placeholder, párrafos de apoyo, letra pequeña de contacto).

### Named Rules
**La regla del campo.** El color se aplica como superficie entera (sección, losa, botón, celda), nunca como borde, filete, icono ni degradado. Si dos superficies deben separarse, se cambia de tono (rosa → rosa claro, vino → tinta) o se deja una costura de 4–16 px del campo de atrás.

**La regla de la frambuesa.** Frambuesa señala lo que se puede tocar para pedir o lo que está activo, en cualquier campo; dentro del campo ocre de "Contáctanos" la celda de acción sigue siendo frambuesa (`.cell-inverse`) para que sea la única superficie distinta. Ningún otro elemento lleva un color saturado.

**La regla de la foto sin marco.** Las fotos de producto no llevan inset, borde ni losa visible: su propio fondo rosado coincide con el suelo del sitio y la losa `--rosa-deep` solo se ve mientras cargan.

**La regla de la tinta por campo.** Sobre rosa, rosa claro y ocre el texto es `--tinta` y el secundario `--tinta-soft`; sobre vino y tinta el texto es blanco y el secundario `--blanco-soft`; el anillo de foco y el subrayado de los enlaces pasan a rosa dentro de los campos oscuros (`.field-deep`, `.field-tinta`, `.footer`).

## Typography

**Display Font:** Archivo variable (ejes wght 100–900 y wdth 62–125 %), autoalojada en `assets/fonts/archivo-latin.woff2`, con Helvetica Neue / Arial de respaldo.
**Body Font:** la misma Archivo, ancho 100 %.
**Label/Mono Font:** no hay; las cifras usan `font-variant-numeric: tabular-nums` de la misma familia.

**Character:** Una sola voz que cambia de ancho en vez de cambiar de familia: ancha y negra para los titulares (118 %), aún más ancha y pesada para la marca construida en bloques (125 %, 900), y normal para leer. El tracking negativo (−0.02 / −0.03 em) junta los titulares como letras cortadas en piedra.

### Hierarchy
- **Display** (800, ancho 118 %, `clamp(2.5rem, 1rem + 6.4vw, 6rem)`, interlínea 0.92, −0.03 em): el único h1 de cada página ("Florería en La Serena", "Nuestro Catálogo"), máximo 10ch, en móvil 9.5vw.
- **Headline** (800, ancho 118 %, `clamp(1.75rem, 1.1rem + 2.2vw, 2.75rem)`, interlínea 1, −0.02 em): h2 de sección y losas de texto del mosaico, nombre de la pieza actual en el hero (interlínea 1.05) y titular del estado vacío; el h2 del cierre baja a ancho 100 % y `clamp(1.25rem, 0.6rem + 1.9vw, 2.125rem)`.
- **Title** (600–700, ancho 100 %, `clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem)`): nombre de la marca en la barra (800, 118 %), precio de producto (700), nombre del producto destacado (700, 110 %), dato de horario en el cierre, lista de sectores (400, interlínea 1.5) y h2 "Arreglos más pedidos".
- **Body** (400, 17 px, interlínea 1.55): párrafos, descripción del hero, enlaces de la barra (500), botones (600), celdas de contacto (600); `max-width: 62ch` por defecto y `text-wrap: pretty`.
- **Label** (500, 15 px): subtítulo de la marca, enlaces de la barra en móvil, chips de filtro, meta de cada marco (nombre 500 en dos líneas, precio tabular), referencia y etiqueta de precio, columnas y pie del footer, letra pequeña.
- **Mark** (900, ancho 125 %, `clamp(2.6rem, 9.2vw, 9.5rem)`, interlínea 0.82): solo las ocho letras del footer, una por bloque.

### Named Rules
**La regla de la familia única.** No entra otra familia; la jerarquía se hace con peso (400 / 500 / 600 / 800 / 900), ancho (100 / 118 / 125 %) y tamaño, nunca con una segunda fuente ni con mayúsculas decorativas (la única línea en mayúsculas es el cierre de zonas, 17 px con 0.02 em).

**La regla de las cifras.** Precios, referencias, horarios y teléfonos llevan `tabular-nums` y el precio va en negrita (600–700) junto al nombre, nunca solo.

## Layout

El contenedor es el viewport entero con margen lateral `--margin` (`clamp(1rem, 2.2vw, 2rem)`); no hay ancho máximo, los campos de color llegan de borde a borde y el contenido se ordena sobre una retícula de 12 columnas con `--gutter` (`clamp(0.75rem, 1.6vw, 1.5rem)`). Las cabeceras de sección parten el ancho en dos (h1 en columnas 1–7 o 1–8, párrafo en 7–13 u 8–13, alineados al pie); "Arreglos más pedidos" fija su nota en 1–4 (sticky bajo la barra) y corre los marcos en 4–13; el cierre pone el video en el 56 % izquierdo y el texto en 8–13.

Los bloques de contenido se separan con costuras del campo de atrás: 4 px entre bloques de la marca, 6 px entre marcos de la fila, 8 px en el mosaico, las celdas de contacto, la tira de fotos y la grilla del catálogo, 12 px entre piezas de la vitrina sin script. El ritmo vertical se marca con `--section` (`clamp(6rem, 11vw, 13rem)`): la mayoría de las secciones usan la mitad arriba y abajo, el cierre del catálogo usa la sección completa arriba.

Tres cortes: 26em esconde el nombre largo de la navegación; 47.99em es el teléfono (cabeceras en bloque, h1 a 9.5vw, vitrina a 60vw de pieza, fila de marcos en grilla con el destacado a todo el ancho y los demás en scroll, mosaico a dos columnas, lista de zonas a una columna de 22 px, celdas apiladas, bloques de la marca en dos filas, botón de WhatsApp a todo el ancho en flujo bajo la vitrina); 64em pasa el catálogo a tres columnas, el cierre a bloque con video de 55svh y el mosaico a dos columnas. Entre 48 y 64em la pieza mide 40vw y la nota de "más pedidos" ocupa 1–5.

El catálogo corre a cuatro columnas con una ficha doble (`span 2 × 2`) cada siete, tres columnas hasta 64em y dos en teléfono (la doble se vuelve de ancho completo). Las zonas se listan a cuatro columnas a una sola talla, con el nombre de la comuna sticky bajo la barra.

## Elevation & Depth

No hay sombras: `box-shadow` no aparece en ningún archivo del mundo. La profundidad se cuenta con el paso de tono (rosa claro sobre rosa, vino sobre tinta) y con la vitrina, donde las piezas vecinas se hacen más pequeñas (×0.74 por paso), más oscuras (−25 % de brillo por paso, mínimo 0.25) y giran hasta ±8° detrás de la pieza actual, apiladas por `z-index` según su distancia al centro. Lo único que flota es el lightbox del catálogo, sobre un velo de tinta al 92 %, y el botón de volver arriba, que aparece por opacidad.

### Named Rules
**La regla de nada flota.** Ninguna superficie lleva sombra ni borde; si un elemento necesita destacar, cambia de campo (un paso de tono) o se agranda (la pieza actual, el marco "lifted" a 66vh frente a 30vh).

## Shapes

Todo es cuadrado: `--radius: 0px` es el único token de esquina y se aplica a botones, chips, losas, celdas, campo de búsqueda y lightbox. Las fotos de producto son cuadradas (`aspect-ratio: 1 / 1`, `object-fit: cover`) sin losa visible, las del mosaico en móvil 4:3 y 1:1, la tira de clientes mezcla 3:4, 1:1 y 3:2 a 150 px de alto. La única geometría no rectangular es la rotación de las piezas en la vitrina (≤ 8°) y el escalado de la foto al pasar el cursor (1.03–1.04 en 600 ms). Los bloques de la marca son columnas de altura variable (64–100 %) que forman un skyline con la letra apoyada en la base.

## Components

### Buttons
Sólidos, planos, de altura fija y tacto de losa.
- **Shape:** rectángulo sin radio (0 px), `inline-flex`, icono de 20 px a 0.6rem del texto.
- **Primary (`.btn-wa`):** frambuesa con texto blanco, 600, 17 px, alto 3.25rem, padding 0 1.5rem; en la barra baja a 2.75rem y 0 1.1rem y en teléfono se reduce al icono (texto `sr-only`); en el pie 2.5rem a 15 px; en teléfono bajo la vitrina ocupa todo el ancho a 3.5rem.
- **Hover / Focus / Active:** hover a frambuesa clara (180 ms) solo con puntero fino; foco visible con anillo frambuesa de 3 px (rosa dentro de campos oscuros); `:active` escala 0.97 en 140 ms.
- **Ghost (`.btn-ghost`):** vino con texto blanco, hover a tinta.
- **Order (`.btn-order`, catálogo):** la misma frambuesa a 2.75rem, 15 px, padding 0 1rem, icono de 18 px; en teléfono se centra a 3rem y todo el ancho.
- **Link (`.link`):** subrayado frambuesa de 0.08em a 0.22em de offset, hover a `currentColor`; en campos oscuros el subrayado es rosa.

### Chips (filtros del catálogo)
- **Style:** rosa claro con tinta, 500, 15 px, alto 2.75rem, padding 0 1rem, sin radio, en fila con `wrap` y costura de 8 px.
- **State:** activo frambuesa con texto blanco; hover (no activo) blanco; `:active` escala 0.97.

### Cards / Containers
- **Losa de producto (`.product-card`):** sin fondo propio; la foto cuadrada se apoya directamente en el suelo rosa (losa `--rosa-deep` solo mientras carga), con costura de 16 × 8 px entre fichas. Cada séptima ficha es doble y su nombre sube a Title 700 ancho 110 %. Bajo la foto: referencia (15 px, tinta suave, tabular), nombre (17 px, 600), descripción (16 px), y un pie con etiqueta "Desde" o precio tachado, precio (Title 700 tabular) y botón de pedido; en hover la foto escala 1.04 y aparece el icono de zoom (44 px, tinta) abajo a la derecha, oculto en táctil.
- **Losa de texto del mosaico (`.tile-text`):** 24 px de padding (20 en móvil), h2 Headline, párrafo 17 px / 1.5, enlace "Ver más"; fondos vino, rosa claro u ocre con la tinta que corresponda al campo.
- **Marco de la fila (`.frame`):** foto cuadrada a 30vh (66vh el destacado), meta de 15 px con nombre a dos líneas y precio tabular teñido; el rótulo se oculta hasta que el marco entra entero (`.is-whole`).
- **Celdas de contacto (`.cell`):** tres celdas de 96 px (60 en móvil) en rosa claro con texto 600 centrado; la tercera invierte a frambuesa con el icono; hover a blanco y a frambuesa clara en la inversa.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** ninguno.

### Inputs / Fields
- **Style:** campo de búsqueda a todo el ancho, rosa claro, tinta 17 px, alto 3.5rem, padding 0 1.25rem, sin borde ni radio, placeholder en tinta suave con opacidad 1.
- **Focus:** anillo frambuesa de 3 px sin offset.
- **Error / Disabled:** no existen; el estado vacío del catálogo es un bloque de texto (h3 Headline + párrafo teñido) con 4rem de aire.

### Navigation
- **Style:** barra sticky de 64 px mínimos en rosa, sin línea ni sombra, con la marca en dos líneas a la izquierda ("Eben Ezer" Title 800 ancho 118 % y "Florería · La Serena" en 15 px teñido), enlaces de 17 px a 500 con gap fluido (1–2.25rem) y el botón frambuesa a la derecha.
- **Mobile:** la navegación hace scroll horizontal sin barra, los enlaces bajan a 15 px, "Inicio" y "Contacto" se ocultan (`.hide-narrow`), "Ramos fúnebres" se acorta a "Fúnebres" bajo 26em, el subtítulo de la marca desaparece y el botón queda solo con el icono (2.75 px de ancho mínimo).
- **States:** sin estado activo de página; foco con anillo frambuesa.

### La vitrina en arco (signature)
Siete fotos cuadradas (`--piece-w`: `clamp(220px, 27vw, 400px)`, 60vw en teléfono, 40vw en tableta) sobre un `track` con scroll nativo y `scroll-snap-type: x mandatory`. Sin script es una fila con costura de 12 px donde cada losa enlaza a su propio mensaje de WhatsApp; con script las piezas se apilan en absoluto dentro de un contenedor sticky y unos `slot` invisibles de `--step` (`clamp(150px, 19vw, 280px)`) llevan el snap. Por cada paso al centro la pieza se desplaza `d × step`, sube o baja 28 px alternando, escala ×0.74, pierde un cuarto de brillo y gira 2.5° por paso (±8° máximo). La pieza central recibe `.is-current` y `aria-current`, y escribe su nombre (Headline), su dato ("flores · **precio** · Ref. nnn" en tinta suave con el precio en tinta 600) y el `href` del botón del hero y del botón móvil. Tocar una vecina la trae al frente con scroll suave, tocar la actual abre WhatsApp, las flechas, Home y End mueven el foco, el mouse arrastra con `cursor: grab` y el snap se suspende mientras dura el arrastre. La transición de brillo dura `--t-ui` (300 ms) y se desactiva con `prefers-reduced-motion`.

### La marca en bloques (signature)
Ocho `span` en flex con costura de 4 px, cada uno con `--h` entre 64 y 100 % de 34svh (22svh en móvil, en dos filas con `.row-break`), fondos rosa claro / ocre / rosa hondo / blanco / frambuesa y la letra en Mark vino apoyada en la base con 0.06em de aire. Es el único lugar donde aparece la tipografía Mark.

### Motion
Tokens: `--ease-out` `cubic-bezier(0.22, 1, 0.36, 1)` para entradas y presión, `--ease-soft` `cubic-bezier(0.33, 1, 0.68, 1)` para el acercamiento de fotos; duraciones `--t-press` 140 ms, `--t-hover` 180 ms, `--t-ui` 300 ms, `--t-reveal` 800 ms. Las entradas `[data-reveal]` suben 22 px en 700/900 ms con 80 ms × índice al cruzar el 8 % del viewport, una sola vez y con red de seguridad a 2.5 s; las `[data-rise]` del primer viewport suben 18 px con 90 ms × índice + 120 ms sin esperar al observador. Todo queda dentro de `prefers-reduced-motion: no-preference`; con reducción no hay transiciones ni scroll suave.

## Do's and Don'ts

### Do:
- **Do** separar superficies con un paso de tono (rosa → rosa claro, vino → tinta) o con una costura de 4–16 px del campo de atrás.
- **Do** poner toda foto de producto cuadrada (1:1, `object-fit: cover`) directamente sobre el suelo rosa, sin inset ni marco; el fondo de la foto es la losa.
- **Do** usar frambuesa, y solo frambuesa, para la acción de pedir y los estados activos en cualquier campo.
- **Do** cambiar la tinta con el campo: `--tinta` y `--tinta-soft` sobre rosa, rosa claro y ocre; blanco y `--blanco-soft` sobre vino y tinta, con foco y subrayado en rosa dentro de los campos oscuros.
- **Do** llevar precios, referencias, horarios y teléfonos en `tabular-nums` con el precio en 600–700.
- **Do** dar a titulares ancho 118 % con tracking −0.02 / −0.03 em y a la marca 125 % / 900, y dejar el texto en ancho 100 %.
- **Do** envolver toda transición y animación en `prefers-reduced-motion: no-preference` y mantener las entradas a una sola vez con red de seguridad.
- **Do** mantener objetivos táctiles de 44 px o más (botones 2.75–3.5rem, celdas 60–96 px, zoom 44 px).

### Don't:
- **Don't** usar `box-shadow`, bordes, líneas divisorias ni degradados; el único velo es el del lightbox (`--tinta` al 92 %).
- **Don't** redondear esquinas; `--radius` es 0 px en todo el mundo.
- **Don't** introducir una segunda familia tipográfica, iconos decorativos ni mayúsculas con tracking para subtítulos.
- **Don't** añadir flechas, puntos o contador a la vitrina; el scroll nativo con snap y el nombre bajo la pieza son la única navegación.
- **Don't** tratar las fotos (filtros, viñetas, bordes redondeados, recortes no cuadrados fuera de la tira de clientes).
- **Don't** poner texto gris neutro sobre los campos; el secundario siempre va teñido del campo (`--blanco-soft` o `--tinta-soft`).

- **Don't** volver a un fondo azul, verde ni blanco bajo las fotos: el rosado del estudio es el suelo y cualquier otro color las recorta.
