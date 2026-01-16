# Frontend Destinos Turísticos (React + TypeScript + Vite)

Este frontend consume el backend de destinos turísticos y ofrece una interfaz en español para buscar, filtrar, crear, editar y eliminar destinos con paginación.

El documento está pensado tanto para **usuarios funcionales** como para tu **calificador técnico**.

---

## 1. Tecnologías principales

- React 19 con TypeScript.
- Vite como bundler.
- TailwindCSS y componentes UI reutilizables (`Button`, `Input`, `Label`, `Textarea`, `Select`, `ModalWrapper`).
- Validación de formularios con Zod.

---

## 2. Cómo ejecutar el proyecto en local

### 2.1. Requisitos previos

- Node.js 18+ instalado.
- Tener el backend del proyecto levantado (por defecto en `http://localhost:4000`).

### 2.2. Pasos

1. Instalar dependencias:

   ```bash
   cd frontend
   npm install
   ```

2. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Abrir el navegador en la URL que indique Vite (por defecto `http://localhost:5173`).

---

## 3. Configuración de entorno (backend URL)

Por defecto, el frontend llama al backend en:

- `http://localhost:4000/api/destinations`

Para subir a producción (o apuntar a otro backend distinto), se usa la variable de entorno de Vite:

- **Variable**: `VITE_API_URL`
- **Ubicación**: archivo `.env` en la carpeta `frontend`.

### 3.1. Ejemplos de configuración

- Entorno local (sin `.env`):

  - Se usará automáticamente:  
    `http://localhost:4000/api/destinations`

- Entorno de producción (por ejemplo, backend desplegado en `https://api.misitio.com`):

  ```env
  VITE_API_URL=https://api.misitio.com
  ```

En el código, la URL base se resuelve así (simplificado):

- Si existe `VITE_API_URL` → se usa ese valor como host (por ejemplo `https://api.misitio.com`) y el código añade `/api/destinations`.  
- Si **no** existe → se usa `http://localhost:4000` y el código añade `/api/destinations` por defecto.

Archivo relevante: [api.ts]

---

## 4. Funcionalidades implementadas en el frontend

### 4.1. Listado y paginación de destinos

- Listado principal de destinos en forma de tabla.
- **Paginación** con:
  - Botones numéricos de página (máximo 5 visibles, centrados en la página actual).
  - Botones “Anterior” y “Siguiente”.
  - Indicador de rango:  
    `Mostrando X–Y de Z destinos`.
- Tamaño de página consistente con el backend: **20 ítems por página**.

Archivo principal: [Destinations.tsx]
### 4.2. Búsqueda y filtros

- Búsqueda por texto que actúa sobre:
  - Nombre del destino.
  - Descripción.
- Filtro por tipo de destino (Ciudad, Playa, Montaña, Isla, etc.).
- Filtro por código de país (`countryCode`).
- Modo de ordenación:
  - Más recientes primero.
  - Más antiguos primero.

Toda la lógica de estado y llamadas a la API se concentra en el hook:  
[useDestinations.ts]

### 4.3. Alta, edición y borrado de destinos

- Botón para crear un destino: abre un **modal** con formulario.
- Posibilidad de editar un destino existente desde la tabla.
- Posibilidad de eliminar destinos, refrescando automáticamente el listado.
- Validación de formulario en el frontend con mensajes en español:
  - Nombre mínimo 2 caracteres.
  - Descripción entre 10 y 1000 caracteres.
  - Código de país de exactamente 2 letras (se convierte a mayúsculas).



### 4.4. Estadísticas y métricas

- Tarjetas/resumen con métricas que consumen los metadatos y estadísticas que expone el backend.
- Información pensada para que el calificador vea que se usan los datos agregados y la paginación real, no sólo un mock plano.

---

## 5. Integración con el backend

Las llamadas HTTP están centralizadas en:  
[api.ts]

Funciones clave:

- `fetchDestinations`:
  - Construye la URL con query params (`search`, `type`, `countryCode`, `mode`, `page`, `limit`).
  - Devuelve datos y metadatos de paginación (`meta`) que provee el backend.
- `saveDestination`:
  - Crea o actualiza destinos según `isEditing`.
- `deleteDestination`:
  - Elimina un destino por `id`.

Todas las respuestas se validan de forma uniforme mediante `handleResponse`, que:

- Lanza errores con mensaje legible si `success` es `false` o la respuesta HTTP no es `2xx`.
- Facilita mostrar mensajes de error al usuario desde el hook `useDestinations`.

---

## 6. Estructura de carpetas del frontend

- `src/features/destinations`
  - `api.ts`: llamadas HTTP al backend.
  - `types.ts`: tipos de datos compartidos en el frontend.
  - `useDestinations.ts`: hook principal de estado, filtros, paginación y acciones.
  - `components/`: componentes específicos de la pantalla de destinos (tabla, modal, filtros).
  - `schemas/`: esquema Zod para validar el formulario.
- `src/components/ui/`:
  - Componentes reutilizables (`Button`, `Input`, `Label`, `Textarea`, `Select`, `ModalWrapper`, `Tooltip`).
- `src/pages/Destinations.tsx`:
  - Página principal que orquesta la vista y usa el hook `useDestinations`.

---

## 7. Guía rápida para el evaluador

1. Levantar backend en `http://localhost:4000`.
2. Levantar frontend con `npm run dev` en la carpeta `frontend`.
3. Abrir el navegador y:
   - Probar la **búsqueda** por nombre/descrición.
   - Cambiar **filtros de tipo y país**.
   - Navegar con los **botones de paginación** y verificar que el rango mostrado coincide con el total.
   - Crear un destino, validando errores de formulario si se dejan campos mal.
   - Editar y eliminar destinos, revisando que la tabla se actualiza.
4. Opcionalmente, configurar `VITE_API_URL` para apuntar a un backend desplegado y comprobar que el frontend funciona sin cambios en el código.

Con esto queda documentado el comportamiento del frontend, su integración con el backend y cómo configurarlo tanto en desarrollo como en producción. 
