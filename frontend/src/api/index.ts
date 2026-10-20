import { httpApi } from "./http";
import { mockApi } from "./mock";
import type { Api } from "./types";

/**
 * VITE_USE_MOCKS:
 *   "true"   (default) everything on built-in demo data
 *   "hybrid" real backend for what exists today (health), demo data for the rest
 *   "false"  everything against the real API
 */
export const API_MODE = (import.meta.env.VITE_USE_MOCKS ?? "true") as "true" | "hybrid" | "false";

/** True whenever any part of the UI still runs on demo data. */
export const USE_MOCKS = API_MODE !== "false";

export const api: Api =
  API_MODE === "false" ? httpApi : API_MODE === "hybrid" ? { ...mockApi, health: httpApi.health } : mockApi;

export * from "./types";
