import { Response } from "express";

/**

 * @template T Tipo del payload de datos (opcional).
 */
export interface ApiResponse<T = void> {
  success: boolean;
  data?: T | null;
  message?: string;
  errors?: Record<string, string[]> | string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    [key: string]: any;
  };
}

export function sendSuccess<T>(
  res: Response,
  data: T | null = null,
  message?: string,
  statusCode = 200,
  meta?: ApiResponse["meta"]
): Response {
  const response: ApiResponse<T> = {
    success: true,
    data,
  };

  if (message !== undefined) response.message = message;
  if (meta !== undefined) response.meta = meta;

  return res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  errors: Record<string, string[]> | string,
  message: string = "An error occurred",
  statusCode = 400
): Response {
  const response: ApiResponse = {
    success: false,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
}
