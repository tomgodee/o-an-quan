import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { CELL_TYPES, STONE_TYPES, STONE_VALUES } from "../../types/types";
import VillagerCell from "./components/VillagerCell";
import { ImperialCell } from "./styles";

import type { Cell, Stone } from "../../types/types";

const imperialStone = {
  type: STONE_TYPES.IMPERIAL,
  value: STONE_VALUES.IMPERIAL,
};
const villagerStone = {
  type: STONE_TYPES.VILLAGER,
  value: STONE_VALUES.VILLAGER,
};

const Game = () => {
  const [cells, setCells] = useState<Cell[]>([]);
  console.log("cells", cells);

  const handleClickVillagerCell = (cell: Cell) => {
    console.log("handleClickstoneCell", cell);
  };

  const getCellValue = (cell: Cell) => {
    return cell.stones.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.value;
    }, 0);
  };

  const initGame = () => {
    const villagerStones = [];
    for (let i = 1; i <= 50; i += 1) {
      villagerStones.push({
        id: i,
        type: STONE_TYPES.VILLAGER,
        value: STONE_VALUES.VILLAGER,
      });
    }

    const cells = [];
    for (let i = 1; i <= 10; i += 1) {
      cells.push({
        id: i,
        type: CELL_TYPES.VILLAGER,
        stones: villagerStones.slice(5 * (i - 1), 5 * i),
      });
    }

    setCells([
      {
        id: 0,
        type: CELL_TYPES.IMPERIAL,
        stones: [{ ...imperialStone, id: 0 }],
      },
      ...cells,
      {
        id: 11,
        type: CELL_TYPES.IMPERIAL,
        stones: [{ ...imperialStone, id: 11 }],
      },
    ]);
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <Box display="flex" width="100%">
      <ImperialCell reversed>
        {cells.length && getCellValue(cells[0])}
      </ImperialCell>
      <Box display="grid" width="60%" gridTemplateColumns="repeat(5, 20%)">
        {cells.slice(1, 11).map((cell) => {
          return (
            <VillagerCell
              key={cell.id}
              cell={cell}
              reversed={cell.id > 5}
              handleOnClick={handleClickVillagerCell}
            />
          );
        })}
      </Box>
      <ImperialCell>
        {cells.length > 11 && getCellValue(cells[11])}
      </ImperialCell>
    </Box>
  );
};

export default Game;
