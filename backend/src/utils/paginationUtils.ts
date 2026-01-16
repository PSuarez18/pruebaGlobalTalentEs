import { Destination } from "../domain/destination";

/***
 * @param page - Pagina recibida (puede ser undefined).
 * @returns Número de página válido (entero >= 1).
 */
export function normalizePage(page?: number): number {
  if (!page || Number.isNaN(page) || page < 1) {
    return 1;
  }
  return Math.floor(page);
}

/**
 * @param limit - Límite recibido (puede ser undefined).
 * @returns Límite válido (entero >= 1).
 */
export function normalizeLimit(limit?: number): number {
  if (!limit || Number.isNaN(limit) || limit < 1) {
    return 20;
  }
  return Math.floor(limit);
}

/**
 * @future
 * En una implementación real con Base de Datos, esta lógica debe moverse
 * al Repositorio usando índices (ej. SQL `LIKE`, `ILIKE` o Full-Text Search)
 * para lograr complejidad O(log N) o O(1).
 */
export function matchesSearch(
  destination: Destination,
  search?: string
): boolean {
  if (!search) {
    return true;
  }
  const lower = search.toLowerCase();
  return (
    destination.name.toLowerCase().includes(lower) ||
    destination.description.toLowerCase().includes(lower)
  );
}
