import "./style.css";

import { animate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Box from "../../../../components/FramerMotion/Box";
import { SCORE_ANIMATION_DURATION_S } from "../../../../constants/constants";
import { useBreakPoints } from "../../../../customHooks";

import type { Stone, Player } from "../../../../types/types";

interface PlayerBoxProps {
  player: Player;
  enabled: boolean;
  isPlayerOne: boolean;
}

const getStonesValue = (stones: Stone[]) => {
  return stones.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value;
  }, 0);
};

const PlayerBox = (props: PlayerBoxProps) => {
  const { player, enabled, isPlayerOne } = props;
  const { palette } = useTheme();
  const { isScreenSm } = useBreakPoints();

  const [score, setScore] = useState(0);

  const flexDirection = useMemo(() => {
    if (isScreenSm) {
      return isPlayerOne ? "column" : "column-reverse";
    }
    return isPlayerOne ? "row" : "row-reverse";
  }, [isPlayerOne, isScreenSm]);

  useEffect(() => {
    animate(score, getStonesValue(player.stones), {
      duration: SCORE_ANIMATION_DURATION_S,
      onUpdate: (latest) => setScore(Number(latest.toFixed(0))),
    });
  }, [player.stones.length]);

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      alignItems={!isScreenSm ? "center" : ""}
      justifyContent={isScreenSm ? "center" : "space-between"}
      width="100%"
      mr={!isScreenSm ? (isPlayerOne ? 8 : 0) : 0}
      ml={!isScreenSm ? (isPlayerOne ? 0 : 8) : 0}
    >
      <Box
        className={
          enabled ? (palette.mode === "dark" ? "rainbow-dark" : "rainbow") : ""
        }
        border={!enabled ? `6px solid ${palette.grey[400]}` : ""}
        minWidth={120}
      >
        <Box width="100%" py={2} display="flex" justifyContent="center">
          <Typography
            variant="score"
            fontWeight={700}
            color={palette.quinary.main}
          >
            {score}
          </Typography>
        </Box>
      </Box>

      <Box
        mb={isPlayerOne ? 0 : 2}
        mt={isPlayerOne ? 2 : 0}
        px={2}
        flexGrow={1}
      >
        <Typography
          textAlign="center"
          color={enabled ? palette.textColor.main : palette.grey[600]}
        >
          {player.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlayerBox;
