const READ_ITEMS_KEY = "readItems";

export const saveReadStatus = (id: string) => {
  const readItems = JSON.parse(localStorage.getItem(READ_ITEMS_KEY) || "[]");
  if (!readItems.includes(id)) {
    readItems.push(id);
    localStorage.setItem(READ_ITEMS_KEY, JSON.stringify(readItems));
  }
};

export const getReadStatus = (id: string): boolean => {
  const readItems = JSON.parse(localStorage.getItem(READ_ITEMS_KEY) || "[]");
  return readItems.includes(id);
};
