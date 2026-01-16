import { Request, Response } from "express";
import { DestinationService } from "../services/destinationService";
import { DestinationNotFoundError } from "../domain/destinationErrors";
import type { ListDestinationsFilters } from "../domain/destinationList";
import { sendSuccess, sendError } from "../utils/apiResponse";
import { normalizeLimit, normalizePage } from "../utils/paginationUtils";

export class DestinationController {
  private service: DestinationService;

  constructor(service: DestinationService) {
    this.service = service;
  }

  getDestinations = (req: Request, res: Response) => {
    const filters = req.validated.query as ListDestinationsFilters;
    const { data, total } = this.service.list(filters);

    const page = normalizePage(filters.page);
    const limit = normalizeLimit(filters.limit);

    return sendSuccess(res, data, "Destinos obtenidos exitosamente", 200, {
      page,
      limit,
      total,
    });
  };

  create = (req: Request, res: Response) => {
    const payload = req.validated.body;
    const destination = this.service.create(payload);
    return sendSuccess(
      res,
      destination,
      "Destino creado exitosamente",
      201
    );
  };

  update = (req: Request, res: Response) => {
    const id = Number(req.validated.params?.id);
    const payload = req.validated.body;
    
    try {
      const updated = this.service.update(id, payload);
      return sendSuccess(res, updated, "Destination actualizado exitosamente");
    } catch (error) {
      if (error instanceof DestinationNotFoundError) {
        return sendError(res, error.message, "Destino no encontro", 404);
      }
      return sendError(
        res,
        "Internal Server Error",
        "An unexpected error occurred",
        500
      );
    }
  };

  delete = (req: Request, res: Response) => {
    const id = Number(req.validated.params?.id);
    try {
      this.service.delete(id);

      return sendSuccess(res, null, "Destino eliminado Exitosamente");
    } catch (error) {
      if (error instanceof DestinationNotFoundError) {
        return sendError(res, error.message, "Destino no encontro", 404);
      }
      return sendError(
        res,
        "Internal Server Error",
        "An unexpected error occurred",
        500
      );
    }
  };
}
