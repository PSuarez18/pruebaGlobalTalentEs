import { z } from "zod";
import { DestinationType, DestinationTypeSchema } from "./destination";

/**listado para destinos**/
export enum ListModeEnum {
  Recent = "recent",
  Oldest = "oldest",
}

export const ListModeSchema = z.nativeEnum(ListModeEnum);
export type ListMode = z.infer<typeof ListModeSchema>;

/* Filtros soportados para listar destinos. */
export interface ListDestinationsFilters {
  search?: string | undefined;
  type?: DestinationType | undefined;
  countryCode?: string | undefined;
  page?: number | undefined;
  limit?: number | undefined;
  mode?: ListMode | undefined;
}

export const ListDestinationsQuerySchema = z.object({
  query: z.object({
    search: z.string().optional(),
    type: DestinationTypeSchema.optional(),
    countryCode: z.string().optional(),
    mode: ListModeSchema.optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().optional(),
  }),
});
