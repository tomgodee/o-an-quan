export const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
} as const;

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

export const SCORE_ANIMATION_DURATION_S = 0.51;
export const SCORE_ANIMATION_DURATION_MS = SCORE_ANIMATION_DURATION_S * 1000;
