import type { Stone } from "./types";
import { STONE_TYPES } from "constants";

export const isImperialStone = (stone: Stone) =>
  stone.type === STONE_TYPES.IMPERIAL;
