import type { Cell, Stone, DirectionType, Player } from "../../types/types";

import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../../constants/constants";

export const createVillagerStones = (): Stone[] => {
  const villagerStones: Stone[] = [];
  for (let i = 1; i <= 50; i += 1) {
    villagerStones.push({
      id: i,
      type: STONE_TYPES.VILLAGER,
      value: STONE_VALUES.VILLAGER,
      top: Math.floor(Math.random() * 65),
      left: Math.floor(Math.random() * 75),
      rotate: Math.floor(Math.random() * 360),
    });
  }
  return villagerStones;
};

export const createImperialStones = (): Stone[] => {
  const imperialStone: Stone = {
    id: 0,
    type: STONE_TYPES.IMPERIAL,
    value: STONE_VALUES.IMPERIAL,
    top: 0,
    left: 0,
    rotate: 0,
  };

  return [
    {
      ...imperialStone,
      id: 0,
    },
    {
      ...imperialStone,
      id: 11,
    },
  ];
};
