import { z } from "zod";

export enum DestinationType {
  City = "CITY",
  Beach = "BEACH",
  Mountain = "MOUNTAIN",
  Countryside = "COUNTRYSIDE",
  Other = "OTHER",
  Island = "ISLAND",
  Desert = "DESERT",
  Lake = "LAKE",
  Forest = "FOREST",
  Historical = "HISTORICAL",
  Ski = "SKI",
  Safari = "SAFARI",
  ThemePark = "THEME_PARK",
}

export const DestinationTypeSchema = z.nativeEnum(DestinationType);

export const destinationSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string().min(2),
  description: z.string().min(10).max(1000).default(""),
  countryCode: z.string().length(2),
  type: DestinationTypeSchema,
  lastModified: z.date(),
});

export type Destination = z.infer<typeof destinationSchema>;

export const createDestinationSchema = destinationSchema.omit({
  id: true,
  lastModified: true,
});

export type CreateDestinationInput = z.infer<typeof createDestinationSchema>;

export const updateDestinationSchema = createDestinationSchema.partial();

export type UpdateDestinationInput = z.infer<typeof updateDestinationSchema>;

export const CreateDestinationRequestSchema = z.object({
  body: createDestinationSchema,
});

export const UpdateDestinationRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: updateDestinationSchema,
});

export const GetByIdRequestSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
});
