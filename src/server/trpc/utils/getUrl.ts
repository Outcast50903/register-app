import { getBaseUrl } from "./getBaseUrl";

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
