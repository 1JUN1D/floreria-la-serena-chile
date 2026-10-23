# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas de La Serena y Coquimbo (Chile) que necesitan enviar flores hoy o en una fecha concreta: una pareja o hijo que regala por cumpleaños, aniversario o Día de la Madre; alguien que acompaña un duelo y necesita un ramo o corona en una sala velatoria o parroquia; una empresa que manda un detalle corporativo. Llegan desde Google ("florería La Serena", "flores a domicilio La Serena", "ramos fúnebres La Serena") o Google Maps, casi siempre desde el celular, y resuelven el pedido por WhatsApp. Segundo público: revendedores y organizadores de eventos que compran flores por mayor.

## Product Purpose

Sitio estático de Florería Eben Ezer (florerialaserena.dondeseria.com): mostrar el catálogo con fotos y precios, posicionar servicios + ciudad en Google (SEO local) y convertir cada visita en una conversación de WhatsApp con el producto, la referencia y la fecha ya escritos. El éxito es un pedido confirmado por WhatsApp al +56 9 9746 9765.

## Positioning

Florería local de La Serena que vende por WhatsApp con catálogo numerado (Ref. 001…) y foto real de cada arreglo: el cliente elige por la foto, pulsa y el mensaje llega armado. El nombre Eben Ezer ("piedra de ayuda", 1 Samuel 7:12) se trata como seña discreta: puede nombrarse una vez y servir de inspiración, sin tono religioso explícito. [confirmado por el usuario]

## Operating Context

- Pedido 100 % por WhatsApp; no hay carrito ni pasarela.
- Horario Lunes a Domingo 8:00–18:00. Despacho a domicilio en La Serena y Coquimbo; el valor del despacho depende del sector y se confirma por WhatsApp. Entrega el mismo día según disponibilidad. Pago por transferencia y efectivo. [confirmado: "mismo esquema de los demás clientes"]
- Sin local abierto al público publicado: sin dirección ni mapa por ahora. [confirmado]
- Ciudad costera, de mañanas nubladas (camanchaca), Avenida del Mar, Centro Histórico, conurbación con Coquimbo.

## Capabilities and Constraints

- Stack: HTML/CSS/JS estático, componentes cargados por fetch (`components/*.html` vía `js/script.js`), publicado en GitHub Pages bajo subdominio de dondeseria.com. Sin build.
- Páginas: index.html, catalogo.html (+ catalogo-2.html duplicado), 26 páginas de servicio `*-la-serena.html`, 6 landings de Google Ads en `landing-pages/`.
- Estructura semántica SEO intocable: un `h1` por página con servicio + ciudad, los `h2` existentes se conservan textualmente (solo cambió Cúcuta → La Serena), párrafos `<p>` bajo cada uno, JSON-LD `Florist`/`Service`.
- Catálogo: array `const products` con los 37 productos propios de Eben Ezer (fotos assets/1–37.webp, 1254×1254, variantes 480/900 en assets/opt/), precios en pesos chilenos = lista de la dueña +25 % cerrados en miles (formato `$38.000`), filtros por tipo y rango de precio, buscador por nombre/código, lightbox y botón "Pedir por WhatsApp" que abre wa.me con nombre, referencia, precio y URL de la foto. Coronas: 60×60 $56.000 y 1,10×60 $88.000.
- Google Analytics G-PNRL6V5MSP heredado de Amatista; se deja hasta que el usuario cree la propiedad propia.

## Brand Commitments

- Nombre exacto: Florería Eben Ezer. Logo actual: assets/logo.webp (heredado de Amatista; pendiente logo propio).
- Sin colores ni tipografías de marca obligatorios: el mundo visual queda abierto.
- Voz: cercana, concreta, chilena, tutea; sin copy de IA.

## Evidence on Hand

- 37 fotos reales de los arreglos de Eben Ezer en assets/1–37.webp (23-oct-2026).
- assets/cliente1–12.webp (clientes de Amatista) y assets/wallpaper.mp4: se conservan por ahora por decisión del usuario, pendientes de reemplazo.
- NO hay reseñas, ni años del negocio, ni cifras de clientes, ni Instagram, ni fotos del taller o de la dueña. Nada de eso se inventa.
- NO hay dirección ni mapa.

## Product Principles

1. El pedido es el producto: cada pantalla termina en un WhatsApp con el mensaje armado.
2. Lo real primero: foto, precio, referencia; ninguna cifra o prueba que no exista.
3. El SEO manda sobre el gusto: títulos, h2 y párrafos conservan servicio + ciudad.
4. Vuela en un celular de gama media con datos móviles.
5. Una sola voz chilena y concreta en todo el sitio.

## Accessibility & Inclusion

Público general adulto, mucho uso con el pulgar y bajo sol de playa: contraste AA, objetivos táctiles de 44 px, zoom permitido, reduced-motion respetado.
