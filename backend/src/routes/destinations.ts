import { Router } from "express";
import { DestinationController } from "../controllers/destinationController";
import { InMemoryDestinationRepository } from "../repositories/destinationRepository";
import { DestinationService } from "../services/destinationService";
import { DESTINATIONS_MOCK } from "../data/destinationsMock";
import { validateRequestDestination } from "../middlewares/validateRequest";
import { ListDestinationsQuerySchema } from "../domain/destinationList";
import {
  CreateDestinationRequestSchema,
  GetByIdRequestSchema,
  UpdateDestinationRequestSchema,
} from "../domain/destination";

const repository = new InMemoryDestinationRepository(DESTINATIONS_MOCK);
const service = new DestinationService(repository);
const controller = new DestinationController(service);

const router = Router();

router.get(
  "/",
  validateRequestDestination(ListDestinationsQuerySchema),
  controller.getDestinations
);
router.post(
  "/",
  validateRequestDestination(CreateDestinationRequestSchema),
  controller.create
);
router.put(
  "/:id",
  validateRequestDestination(UpdateDestinationRequestSchema),
  controller.update
);
router.delete(
  "/:id",
  validateRequestDestination(GetByIdRequestSchema),
  controller.delete
);

export default router;
