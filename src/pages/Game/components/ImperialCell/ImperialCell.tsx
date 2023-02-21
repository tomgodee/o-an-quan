import { motion, Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { faHand, faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@mui/material/Typography";
import stoneIcon from "assets/stone.png";
import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../../../../constants/constants";
import { useBreakPoints } from "../../../../customHooks/useBreakPoints";
import { Stone } from "../../../../types/types";
import { getCellValue, getPebbleImage } from "../../../../utils";
import Box from "../FramerMotion/Box";
import { ImperialCell as ImperialCellComponent } from "./styles";

import type { Cell, DirectionType } from "../../../../types/types";
interface ImperialCellProps {
  reversed?: boolean;
  cell: Cell;
  // direction: DirectionType;
  // isSelected: boolean;
  // handleClickDirectionButton: (cell: Cell, direction: DirectionType) => void;
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
