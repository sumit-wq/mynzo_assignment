import { IBookmark } from "../interfaces";

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.error("parsing error on", { value });
    return undefined;
  }
}

export const toggleItemInArray = (item: IBookmark, array: IBookmark[]) => {
  const index = array.findIndex((i) => i.url === item.url);

  if (index === -1) {
    // Item is not present, add it to the array
    return [...array, item];
  } else {
    // Item is already present, remove it from the array
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }
};
