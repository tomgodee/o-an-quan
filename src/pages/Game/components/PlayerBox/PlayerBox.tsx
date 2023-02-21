import "./style.css";

import stoneIcon from "assets/stone.png";
import { animate, motion, Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../../../../constants/constants";
import { useBreakPoints } from "../../../../customHooks/useBreakPoints";
import { getCellValue, getPebbleImage } from "../../../../utils";
import Box from "../FramerMotion/Box";
import { PlayerBox as PlayerBoxContainer } from "./styles";

import type {
  Cell,
  Stone,
  DirectionType,
  Player,
} from "../../../../types/types";
// import { PlayerBox as PlayerBoxComponent } from "./styles";

interface PlayerBoxProps {
  player: Player;
  enabled: boolean;
  // cell: Cell;
  // direction: DirectionType;
  // isSelected: boolean;
  // handleClickDirectionButton: (cell: Cell, direction: DirectionType) => void;
}

const isImperialStone = (stone: Stone) => stone.type === STONE_TYPES.IMPERIAL;

const getStonesValue = (stones: Stone[]) => {
  return stones.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value;
  }, 0);
};

const PlayerBox = (props: PlayerBoxProps) => {
  const { player, enabled } = props;
  const { palette } = useTheme();

  const [score, setScore] = useState(0);

  useEffect(() => {
    animate(score, getStonesValue(player.stones), {
      duration: 1,
      onUpdate: (latest) => setScore(Number(latest.toFixed(0))),
    });
  }, [player.stones.length]);

  return (
    <Box
      className={enabled ? "rainbow" : ""}
      border={!enabled ? `6px solid ${palette.grey[400]}` : ""}
    >
      <Box
        width="100%"
        py={2}
        // borderLeft={`3px solid ${palette.secondary.main}`}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="score"
          fontWeight={700}
          color={palette.quinary.main}
        >
          {score}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlayerBox;
