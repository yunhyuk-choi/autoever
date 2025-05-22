export function buildSearchParams(req: object) {
  const queryArr = [];
  for (const [key, value] of Object.entries(req)) {
    if (value) queryArr.push(`${key}=${value}`);
  }
  return queryArr.length ? `?${queryArr.join("&")}` : "";
}
