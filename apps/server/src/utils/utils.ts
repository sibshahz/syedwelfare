export function escapeString(input: string): string {
  return input.replace(/\s+/g, "").replace(/-/g, "");
}
