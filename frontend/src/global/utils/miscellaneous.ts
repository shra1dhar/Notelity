export function deepJsonCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
