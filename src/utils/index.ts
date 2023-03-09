import type { Stone } from "types/types";

import pebble_1 from "assets/pebble_1.png";
import pebble_2 from "assets/pebble_2.png";
import pebble_3 from "assets/pebble_3.png";
import pebble_4 from "assets/pebble_4.png";
import pebble_5 from "assets/pebble_5.png";
import pebble_6 from "assets/pebble_6.png";
import pebble_7 from "assets/pebble_7.png";

export const getPebbleImage = (stoneId: number) => {
  if (stoneId % 7 === 1) return pebble_1;
  if (stoneId % 7 === 2) return pebble_2;
  if (stoneId % 7 === 3) return pebble_3;
  if (stoneId % 7 === 4) return pebble_4;
  if (stoneId % 7 === 5) return pebble_5;
  if (stoneId % 7 === 6) return pebble_6;
  if (stoneId % 7 === 7) return pebble_7;
  return pebble_1;
};

export default {
  getPebbleImage,
};
