import {
  CreateDestinationInput,
  Destination,
  UpdateDestinationInput,
} from "../domain/destination";
import type { ListDestinationsFilters } from "../domain/destinationList";
import { DestinationRepository } from "../repositories/destinationRepository";
import { normalizeLimit, normalizePage } from "../utils/paginationUtils";
import { DestinationNotFoundError } from "../domain/destinationErrors";

export class DestinationService {
  private repository: DestinationRepository;

  constructor(repository: DestinationRepository) {
    this.repository = repository;
  }

  list(filters: ListDestinationsFilters): { data: Destination[]; total: number } {
    const page = normalizePage(filters.page);
    const limit = normalizeLimit(filters.limit);
    return this.repository.list(filters, page, limit);
  }

  create(input: CreateDestinationInput): Destination {
    const now = new Date();
    return this.repository.create({ ...input, lastModified: now });
  }

  update(id: number, input: UpdateDestinationInput): Destination {
    const now = new Date();
    const updates = { ...input, lastModified: now };
    const updated = this.repository.update(id, updates as any);
    if (!updated) {
      throw new DestinationNotFoundError();
    }
    return updated;
  }

  delete(id: number): void {
    const deleted = this.repository.delete(id);
    if (!deleted) {
      throw new DestinationNotFoundError();
    }
  }
}
