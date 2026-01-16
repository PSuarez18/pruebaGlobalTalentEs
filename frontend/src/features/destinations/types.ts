export const DestinationType = {
  City: "CITY",
  Beach: "BEACH",
  Mountain: "MOUNTAIN",
  Countryside: "COUNTRYSIDE",
  Other: "OTHER",
  Island: "ISLAND",
  Desert: "DESERT",
  Lake: "LAKE",
  Forest: "FOREST",
  Historical: "HISTORICAL",
  Ski: "SKI",
  Safari: "SAFARI",
  ThemePark: "THEME_PARK",
} as const;

export type DestinationType =
  (typeof DestinationType)[keyof typeof DestinationType];

export type Destination = {
  id: number;
  name: string;
  description: string;
  countryCode: string;
  type: DestinationType;
  lastModified: string;
};

export type DestinationFormState = {
  id: number | null;
  name: string;
  description: string;
  countryCode: string;
  type: DestinationType;
};

export type DestinationFilterType = DestinationType | "ALL";

export const DestinationListMode = {
  Recent: "recent",
  Oldest: "oldest",
} as const;

export type DestinationListMode =
  (typeof DestinationListMode)[keyof typeof DestinationListMode];

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message?: string;
  errors?: Record<string, string[]> | string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    [key: string]: any;
  };
}
