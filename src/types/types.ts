import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../constants/constants";

export interface Stone {
  id: number;
  top: number;
  left: number;
  rotate: number;
  type: typeof STONE_TYPES[keyof typeof STONE_TYPES];
  value: typeof STONE_VALUES[keyof typeof STONE_VALUES];
}

export interface Cell {
  id: number;
  type: typeof CELL_TYPES[keyof typeof CELL_TYPES];
  stones: Stone[];
  leftCellIndex: number;
  rightCellIndex: number;
  shouldShowDroppingAnimation: boolean;
}

export type DirectionType = typeof DIRECTIONS[keyof typeof DIRECTIONS];

export interface Player {
  stones: Stone[];
}
