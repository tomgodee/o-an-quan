import stoneIcon from "assets/stone.png";

import Typography from "@mui/material/Typography";

import { STONE_TYPES } from "../../../../constants/constants";
import { Stone } from "../../../../types/types";
import { getCellValue, getPebbleImage } from "../../../../utils";
import Box from "../FramerMotion/Box";
import { ImperialCell as ImperialCellComponent } from "./styles";

import type { Cell } from "../../../../types/types";
interface ImperialCellProps {
  reversed?: boolean;
  cell: Cell;
}

const isImperialStone = (stone: Stone) => stone.type === STONE_TYPES.IMPERIAL;

const ImperialCell = (props: ImperialCellProps) => {
  const { reversed, cell } = props;

  return (
    <ImperialCellComponent reversed={reversed}>
      <Box position="absolute" width="80%" height="80%">
        {cell.stones.map((stone) => {
          return (
            <Box
              key={stone.id}
              position="absolute"
              top={isImperialStone(stone) ? "55%" : `${stone.top}%`}
              left={isImperialStone(stone) ? "50%" : `${stone.left}%`}
              initial={{
                rotate: stone.rotate,
                x: isImperialStone(stone) ? "-50%" : "0%",
                y: isImperialStone(stone) ? "-50%" : "0%",
              }}
            >
              <img
                src={
                  isImperialStone(stone) ? stoneIcon : getPebbleImage(stone.id)
                }
                height={isImperialStone(stone) ? 60 : 20}
                width={isImperialStone(stone) ? 60 : 20}
                alt="stone"
              />
            </Box>
          );
        })}
      </Box>
      <Box
        position="absolute"
        right={reversed ? "" : "10px"}
        left={reversed ? "10px" : ""}
      >
        <Typography fontWeight={700} variant="caption">
          {getCellValue(cell)}
        </Typography>
      </Box>
    </ImperialCellComponent>
  );
};

export default ImperialCell;
