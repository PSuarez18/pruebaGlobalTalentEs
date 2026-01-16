import type {
  ApiResponse,
  Destination,
  DestinationFilterType,
  DestinationListMode,
  DestinationType,
} from "./types";

const BACKEND_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ??
  "http://localhost:4000";

const API_PREFIX = "/api";
const DESTINATIONS_PATH = "/destinations";

const DESTINATIONS_BASE_URL = `${BACKEND_BASE_URL}${API_PREFIX}${DESTINATIONS_PATH}`;

export type DestinationListParams = {
  search?: string;
  type?: DestinationFilterType;
  countryCode?: string;
  mode?: DestinationListMode;
  page?: number;
  limit?: number;
};

export type DestinationPayload = {
  id: number;
  name: string;
  description: string;
  countryCode: string;
  type: DestinationType;
};

async function handleResponse<T>(res: Response): Promise<T> {
  const json: ApiResponse<T> = await res.json();

  if (!res.ok || !json.success) {
    const errorMsg =
      typeof json.errors === "string"
        ? json.errors
        : json.message || "Unknown error";
    throw new Error(errorMsg);
  }

  return json.data as T;
}

export async function fetchDestinations(
  params: DestinationListParams
): Promise<{ data: Destination[]; meta?: ApiResponse<Destination[]>["meta"] }> {
  const url = new URL(DESTINATIONS_BASE_URL);

  if (params.search) {
    url.searchParams.set("search", params.search);
  }

  if (params.type && params.type !== "ALL") {
    url.searchParams.set("type", params.type);
  }

  if (params.countryCode) {
    url.searchParams.set("countryCode", params.countryCode);
  }

  if (params.mode) {
    url.searchParams.set("mode", params.mode);
  }

  if (typeof params.page === "number") {
    url.searchParams.set("page", String(params.page));
  }

  if (typeof params.limit === "number") {
    url.searchParams.set("limit", String(params.limit));
  }

  const res = await fetch(url.toString());
  const json: ApiResponse<Destination[]> = await res.json();

  if (!res.ok || !json.success) {
    const errorMsg =
      typeof json.errors === "string"
        ? json.errors
        : json.message || "Unknown error";
    throw new Error(errorMsg);
  }

  return { data: json.data as Destination[], meta: json.meta };
}

export async function saveDestination(
  payload: DestinationPayload,
  isEditing: boolean
): Promise<Destination> {
  const url = isEditing
    ? `${DESTINATIONS_BASE_URL}/${payload.id}`
    : DESTINATIONS_BASE_URL;
  const method = isEditing ? "PUT" : "POST";

  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse<Destination>(res);
}

export async function deleteDestination(id: number): Promise<void> {
  const res = await fetch(`${DESTINATIONS_BASE_URL}/${id}`, { method: "DELETE" });
  return handleResponse<void>(res);
}
