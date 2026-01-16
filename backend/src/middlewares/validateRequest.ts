import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import { sendError } from "../utils/apiResponse";


interface ValidatedRequestShape {
  body?: unknown;
  query?: unknown;
  params?: unknown;
}

export const validateRequestDestination =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = (await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })) as ValidatedRequestShape;

     
      req.validated = parsed;

      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        return sendError(
          res,
          error.flatten().fieldErrors as Record<string, string[]>,
          "Validation Error",
          400
        );
      }
      console.error("Unknown validation error details:", error);
      return sendError(
        res,
        "Unknown validation error",
        "Validation Error",
        400
      );
    }
  };
