export interface Stone {
  id: number;
  type: typeof STONE_TYPES[keyof typeof STONE_TYPES];
  value: typeof STONE_VALUES[keyof typeof STONE_VALUES];
}

export interface Cell {
  id: number;
  type: typeof CELL_TYPES[keyof typeof CELL_TYPES];
  stones: Stone[];
}

export const CELL_TYPES = {
  VILLAGER: "villager",
  IMPERIAL: "imperial",
} as const;

export const STONE_TYPES = {
  VILLAGER: "villager",
  IMPERIAL: "imperial",
} as const;

export const STONE_VALUES = {
  VILLAGER: 1,
  IMPERIAL: 10,
} as const;
