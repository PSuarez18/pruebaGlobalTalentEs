# Prueba Técnica - Destinos Turísticos

Este repositorio contiene dos proyectos:

- `backend/`: API REST en Node.js + Express que expone destinos turísticos, con filtrado, paginación, creación, edición y borrado.
- `frontend/`: Aplicación React + TypeScript + Vite que consume la API y ofrece una interfaz en español para gestionar los destinos.

## Estructura

- `backend/`
  - API en Express con arquitectura en capas (controllers, services, repositories, data, middlewares, utils).
  - Datos en memoria a partir de un mock de más de 100 destinos en español.
- `frontend/`
  - SPA en React + TypeScript.
  - Paginación real (20 ítems por página), búsqueda, filtros por tipo y país, CRUD completo y validación con Zod.

Cada carpeta (`backend` y `frontend`) tiene su propio `README.md` con detalles técnicos y pasos específicos de instalación y ejecución.

## Puesta en marcha rápida

1. Clonar el repositorio en esta carpeta raíz.
2. Seguir las instrucciones de:
   - [backend/README.md](backend/README.md)
   - [frontend/README.md](frontend/README.md)

En resumen:

- Levantar el backend (por defecto en `http://localhost:4000`).
- Levantar el frontend (por defecto en `http://localhost:5173`), que se conecta al backend mediante:
  - `VITE_API_URL` para definir el host del backend (producción) o
  - `http://localhost:4000` por defecto en desarrollo.

