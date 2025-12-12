# Carlos Delgado Technical Test – Restaurants

Proyecto full‑stack para gestión de restaurantes con frontend en React + Vite y backend en Node.js + Express.

## Estructura del repositorio
- `restaurant-front/` Frontend (React, TypeScript, Vite)
- `restaurant-back/` Backend (Node.js, Express ESM)

## Tecnologías principales
- Frontend
  - React 19, React DOM
  - TypeScript
  - Vite 7
  - PrimeReact, PrimeIcons, PrimeFlex
  - React‑Bootstrap, Bootstrap 5
  - Tailwind CSS 4 (con `@tailwindcss/vite`)
  - motion (animaciones)
- Backend
  - Node.js (ES Modules)
  - Express 5, CORS

## Requisitos previos
- Node.js 18+ y npm

## Instalación
1) Instalar dependencias del frontend
```
cd restaurant-front
npm install
```
2) Instalar dependencias del backend
```
cd restaurant-back
npm install
```

## Ejecución en desarrollo
- Backend (Express)
```
cd restaurant-back
npm run dev
```
  - El servicio se ejecuta en `http://localhost:3000` (verificar valor actual antes de integrar con el front).

- Frontend (Vite)
```
cd restaurant-front
npm run dev
```
  - Vite sirve por defecto en `http://localhost:5173` (puede variar; la consola indicará la URL exacta).

## Scripts útiles
- Frontend
  - `npm run dev` Inicia servidor de desarrollo Vite
  - `npm run build` Compila TypeScript y genera build de producción
  - `npm run preview` Sirve el build localmente para prueba
  - `npm run lint` Linter con ESLint
- Backend
  - `npm run dev` Ejecuta `server.js` con `--watch`
  - `npm start` Ejecuta `server.js`

## Despliegue
- Frontend (estático)
  1. Generar build
  ```
  cd restaurant-front
  npm run build
  ```
  2. Publicar la carpeta `dist/` en un hosting estático (Netlify, Vercel, GitHub Pages, etc.).
  3. Configurar variable(s) de entorno/endpoint(s) de API si aplica (por ejemplo, URL del backend).

- Backend (Node.js)
  - Opciones: Render, Railway, Fly.io, VPS/VM propia, etc.
  - Pasos generales:
    1. Subir el código de `restaurant-back`
    2. Definir `npm start` como comando de arranque
    3. Configurar puerto de ejecución (leer `process.env.PORT` en `server.js`)
    4. Permitir CORS para el dominio del frontend en producción

## UI/UX y estilos
- Componentes con PrimeReact y layout utilitario con PrimeFlex
- Bootstrap 5 y React‑Bootstrap para tablas y elementos de interfaz
- Tailwind CSS 4 para utilidades adicionales (via plugin de Vite)

## Notas de desarrollo
- Mantener consistencia de estilos entre componentes (formularios, diálogos, tablas)
- Verificar el puerto del backend y la URL utilizada por el frontend para llamadas de API
- Si se usa `json-server` en el front para mocks, asegúrate de deshabilitarlo o ajustarlo en producción

## Licencia
Uso educativo/demostrativo.

## Autor
- Carlos Delgado

