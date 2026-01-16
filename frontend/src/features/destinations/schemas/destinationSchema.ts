import { z } from "zod";
import { DestinationType } from "../types";

export const DestinationTypeSchema = z.nativeEnum(DestinationType);

export const destinationFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(1000, "La descripción no puede exceder 1000 caracteres"),
  countryCode: z
    .string()
    .length(2, "El código de país debe tener exactamente 2 caracteres")
    .regex(/^[A-Za-z]+$/, "El código de país solo puede contener letras")
    .transform((val) => val.toUpperCase()),
  type: DestinationTypeSchema,
});

export type DestinationFormValues = z.infer<typeof destinationFormSchema>;
