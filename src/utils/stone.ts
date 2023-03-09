import type { Stone } from "types/types";

export const calculateStonesValue = (stones: Stone[]) => {
  return stones.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value;
  }, 0);
};

export const sortStonesByType = (stoneA: Stone, stoneB: Stone) => {
  return -stoneA.type.localeCompare(stoneB.type);
};
