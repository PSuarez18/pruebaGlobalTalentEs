import { Destination } from "../domain/destination";
import {
  ListDestinationsFilters,
  ListModeEnum,
} from "../domain/destinationList";
import { matchesSearch } from "../utils/paginationUtils";

export interface DestinationRepository {
  getAll(): Destination[];
  findById(id: number): Destination | undefined;
  update(id: number, updates: Partial<Destination>): Destination | undefined;
  create(destination: Omit<Destination, "id">): Destination;
  delete(id: number): boolean;
  list(
    filters: ListDestinationsFilters,
    page: number,
    limit: number
  ): { data: Destination[]; total: number };
}

export class InMemoryDestinationRepository implements DestinationRepository {
  private destinations: Destination[];
  private currentIdCounter: number;

  constructor(initial: Destination[]) {
    this.destinations = initial;

    // Inicialice el contador de ID con el máximo existente para evitar colisiones
    //TODO... CAMBIAR EN DB REAL SOLO VOY USARLO POR MOCK EN MEMORIA
    const maxId =
      initial.length > 0 ? Math.max(...initial.map((d) => d.id)) : 0;
    this.currentIdCounter = maxId;
  }

  private findIndexById(id: number): number {
    return this.destinations.findIndex((d) => d.id === id);
  }

  getAll(): Destination[] {
    return [...this.destinations];
  }

  findById(id: number): Destination | undefined {
    return this.destinations.find((d) => d.id === id);
  }

  create(destinationData: Omit<Destination, "id">): Destination {
    this.currentIdCounter++;
    const newDestination: Destination = {
      ...destinationData,
      id: this.currentIdCounter,
    };
    this.destinations.push(newDestination);
    return newDestination;
  }

  update(id: number, updates: Partial<Destination>): Destination | undefined {
    const index = this.findIndexById(id);
    if (index === -1) {
      return undefined;
    }
    const current = this.destinations[index];
    const updated = { ...current, ...updates } as Destination;
    this.destinations[index] = updated;
    return updated;
  }

  delete(id: number): boolean {
    const index = this.findIndexById(id);
    if (index === -1) {
      return false;
    }
    this.destinations.splice(index, 1);
    return true;
  }

  list(
    filters: ListDestinationsFilters,
    page: number,
    limit: number
  ): { data: Destination[]; total: number } {
    const offset = (page - 1) * limit;

    let result = this.getAll().sort((a, b) => {
      if (a.lastModified.getTime() === b.lastModified.getTime()) {
        return b.id - a.id;
      }

      const isOldest = filters.mode === ListModeEnum.Oldest;

      if (isOldest) {
        return a.lastModified > b.lastModified ? 1 : -1;
      }

      return a.lastModified < b.lastModified ? 1 : -1;
    });

    if (filters.search) {
      result = result.filter((d) => matchesSearch(d, filters.search));
    }

    if (filters.type) {
      result = result.filter((d) => d.type === filters.type);
    }

    if (filters.countryCode) {
      const country = filters.countryCode.toUpperCase();
      result = result.filter((d) =>
        d.countryCode.toUpperCase().includes(country)
      );
    }

    //ESTOY DEVOLVIENDO EL ARRAY DE POCICION QUE QUIERO SEGUN LIMITE HASTA LA CANTIDAD QUE NECESITO
    return {
      data: result.slice(offset, offset + limit),
      total: result.length,
    };
  }
}
