# Backend de Destinos Turísticos - Documentación Técnica

Este repositorio contiene la implementación del backend para la gestión de destinos turísticos. Esta documentación detalla las decisiones arquitectónicas, patrones de diseño utilizados y la justificación detrás de cada implementación, con el objetivo de proporcionar un contexto claro para la revisión técnica.

---

## 1. Arquitectura y Patrones de Diseño

El proyecto sigue una **Arquitectura en Capas (Layered Architecture)** estricta para garantizar la separación de responsabilidades , la testabilidad y la mantenibilidad.

### 1.1. Estructura de Capas

El flujo de una petición sigue estrictamente este orden:
`Request` ➡️ `Middleware` ➡️ `Controller` ➡️ `Service` ➡️ `Repository` ➡️ `Data`

- ** Middlewares (`/middlewares`)**:

  - **Función**: "Guardianes" de la aplicación. Interceptan la petición antes de que llegue al controlador.
  - **Implementación**: Se implementó un middleware genérico `validateRequestDestination` que utiliza **Zod** para validar y transformar los datos (`body`, `query`, `params`).
  - **Por qué**: Implementar el principio de _"Fail Fast"_ (fallar rápido). Si los datos son inválidos, la petición se rechaza inmediatamente. Además, centraliza la lógica de validación, dejando los controladores limpios.

- ** Controllers (`/controllers`)**:

  - **Función**: Orquestadores. Reciben la petición HTTP, extraen los datos (ya validados) y llaman al servicio correspondiente.

- ** Services (`/services`)**:

  - **Función**: Contienen toda la **Lógica de Negocio**.

- **💾 Repositories (`/repositories`)**:
  - **Patrón Repositorio**: Se define una interfaz `DestinationRepository` y una implementación `InMemoryDestinationRepository`.
  - **Por qué**: Desacoplamiento. El servicio no sabe (ni le importa) si los datos vienen de un array en memoria, un archivo JSON o una base de datos PostgreSQL

---

## 2. Decisiones Técnicas Clave y Justificación

### 2.1. Validación Declarativa con Zod

Se eligió **Zod** sobre validaciones manuales por tres razones:

1.  **Seguridad de Tipos (Type Safety)**: Zod infiere los tipos de TypeScript automáticamente.
2.  **Transformación Automática**: Los Query Params en Express siempre son `strings`. Zod (con `z.coerce`) los transforma automáticamente a `numbers` o `booleanos` antes de llegar al controlador.
3.  **Documentación Viva**: Los esquemas (`createDestinationSchema`, `ListDestinationsQuerySchema`) sirven como documentación del contrato de la API.

### 2.2. Request Augmentation

Para manejar los datos validados de manera segura y limpia (similar a NestJS), se extendió la interfaz nativa `Request` de Express.

- **Problema**: Express no sabe que nuestros datos han sido validados y transformados por un middleware previo. Usar `req.body` es inseguro y usar `res.locals` es verboso.
- **Solución**: Se utilizó "Declaration Merging" de TypeScript (`src/types/express.d.ts`) para añadir una propiedad `validated` al objeto Request.
- **Resultado**: Los controladores acceden a datos fuertemente tipados (`req.validated.query`, `req.validated.body`) sin necesidad de castings manuales.

### 2.3. Simulación de "Popularidad" (Mock de Estadísticas)

**Decisión**: No usar un campo estático booleano `isPopular` en la base de datos de destinos.
**Implementación**:

- Se creó un mock separado de estadísticas (`destinationStatsMock`) que vincula `destinationId` con `searchCount`.
- El servicio calcula los "Top Destinos" dinámicamente ordenando por `searchCount` descendente.
  **Por qué**: Simula un escenario real de analítica. Un destino puede ser popular hoy y dejar de serlo mañana sin necesidad de actualizar el registro del destino, solo basándose en el comportamiento de los usuarios.

### 2.3. Paginación y Filtrado

Se extrajo la lógica de normalización de paginación a `utils/paginationUtils.ts`.

- **Normalización**: Asegura que `page` sea siempre >= 1 y `limit` tenga un valor por defecto razonable (20), protegiendo al backend de valores absurdos o negativos.

### 2.4. Consideraciones de Rendimiento (Documentadas en Código)

En `destinationService.ts`, se añadió documentación JSDoc explícita sobre la complejidad **O(N)** de la búsqueda en memoria. Se reconoce que para grandes volúmenes de datos (>10k registros), esta lógica debe migrar a índices de base de datos (SQL `LIKE` o Full-Text Search).

---

## 3. Documentación de la API (Endpoints)

### GET `/api/destinations`

Obtiene una lista paginada de destinos.

**Query Parameters:**
| Parámetro | Tipo | Opcional | Descripción |
|-----------|------|----------|-------------|
| `page` | `number` | ✅ | Número de página (Default: 1). |
| `limit` | `number` | ✅ | Elementos por página (Default: 20). |
| `search` | `string` | ✅ | Filtra por nombre o descripción (Case insensitive). |
| `type` | `enum` | ✅ | Filtra por categoría (ej. `CITY`, `BEACH`). |
| `countryCode`| `string`| ✅ | Código ISO de 2 letras del país. |
| `mode` | `enum` | ✅ | `popular` (ordena por búsquedas) o `recent` (por fecha). |

**Ejemplo de Respuesta (Éxito):**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Paris",
      "description": "City of lights...",
      "countryCode": "FR",
      "type": "CITY",
      "lastModified": "2024-01-01T00:00:00.000Z"
    }
  ],
  "message": "Destinations retrieved successfully"
}
```

**Ejemplo de Respuesta (Error):**

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": {
    "page": ["Expected number, received string"]
  }
}
```

### POST `/api/destinations`

Crea un nuevo destino.

**Body (JSON):**

```json
{
  "name": "Tokyo",
  "description": "Dynamic metropolis",
  "countryCode": "JP",
  "type": "CITY" // Debe ser un valor válido del Enum DestinationType
}
```

### PUT `/api/destinations/:id`

Actualiza un destino existente.

- **Validación**: El `id` debe ser un entero positivo.
- **Body**: Acepta campos parciales (puedes enviar solo `name` o `description`).

### DELETE `/api/destinations/:id`

Elimina un destino (lógicamente o físicamente según implementación del repo).

---

## 4. Cómo Ejecutar el Proyecto

### Requisitos

- Node.js (v18 o superior recomendado)
- npm

### Pasos

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Modo Desarrollo** (con recarga automática):

    ```bash
    npm run dev
    ```

3.  **Compilar a JavaScript** (Build de producción):

    ```bash
    npm run build
    ```

    _Esto generará la carpeta `dist/`._

4.  **Iniciar en Producción**:
    ```bash
    npm start
    ```

---

**Autor**: [Paolo Suarez / Candidato]
**Fecha**: Enero 2026
