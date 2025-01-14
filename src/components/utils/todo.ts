export const generateUniqueId = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export const replaceItemAtIndex = <T>(
  arr: T[],
  index: number,
  newItem: T
): T[] => arr.map((item, i) => (i === index ? newItem : item));

export const removeItemAtIndex = <T>(arr: T[], index: number): T[] =>
  arr.filter((_, i) => i !== index);
