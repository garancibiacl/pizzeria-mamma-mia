# Pizzería Mamma Mía

URL del deploy (Netlify):

https://pizzeria-mamma.netlify.app

Aplicación SPA construida con React + Vite que simula la experiencia de una pizzería: navegación, listado de pizzas, carrito y páginas de autenticación.

---

## Desafío 1 — Estructura base y routing

Hitos:
- Crear proyecto con Vite y React.
- Configurar `react-router-dom` con rutas iniciales (`/`, `/login`, `/register`, `/profile`, `/cart`, `*`).
- Componente `Navbar` con enlaces de navegación y total del carrito (estático para el hito).
- Componente `Header` con imagen de fondo.

## Desafío 2 — Listado de pizzas (CardPizza)

Hitos:
- Crear `CardPizza` para mostrar nombre, precio, imagen e ingredientes.
- Formateo de moneda con `toLocaleString("es-CL")`.
- Botones de acción “Ver más” y “Añadir”.

## Desafío 3 — Carrito

Hitos:
- Estado local con items del carrito (archivo `src/data/pizzas.js`).
- Incrementar/decrementar unidades, remover cuando llega a 0.
- Cálculo de total y renderizado accesible.

## Desafío 4 — Autenticación (UI)

Hitos:
- Páginas `LoginPage` y `RegisterPage` con validaciones básicas de formularios.
- `Profile` con botón de cierre de sesión (UI) y datos mockeados.
- Toast de feedback en login (éxito/error).

## Desafío 5 — Detalles de UX/UI e íconos

Hitos:

- Integración router con `react-router-dom`.                    
- Integración parcial de íconos con `react-icons/ri`:
  - `Navbar`: `RiHomeLine`, `RiUserLine`, `RiLogoutBoxRLine`, `RiLoginCircleLine`, `RiUserAddLine`, `RiShoppingCartLine`.
  - `CardPizza`: `RiEyeLine`, `RiShoppingCartLine`.
  - `LoginPage`: `RiLoginCircleLine` en el botón de enviar.
  - `RegisterPage`: `RiUserAddLine` en el botón de enviar.
- Favicon personalizado de pizza (`public/pizza.svg`) enlazado en `index.html`.

---

## Tecnologías

- React 19 + Vite 7
- React Router DOM 7
- Tailwind CSS 4
- React Icons (conjunto `ri`)

---

## Scripts

- `npm run dev`: Inicia el entorno de desarrollo.
- `npm run build`: Genera el build de producción.
- `npm run preview`: Sirve el build localmente para revisión.

---

## Ejecutar en local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en el navegador la URL que indique Vite (por defecto `http://localhost:5173`).

---

## Estructura relevante

- `src/components/Navbar.jsx`
- `src/pages/Header.jsx`
- `src/pages/CardPizza.jsx`
- `src/pages/Cart.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/RegisterPage.jsx`
- `src/pages/Profile.jsx`
- `public/pizza.svg` (favicon)

---

## Deploy

El proyecto está desplegado en Netlify:

https://pizzeria-mamma.netlify.app

Para actualizar el deploy, generar el build con `npm run build` y subir la carpeta `dist/` o conectar el repositorio a Netlify con build command `vite build` y publish directory `dist/`.
