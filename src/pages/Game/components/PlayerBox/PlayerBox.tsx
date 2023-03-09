import "./style.css";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { SCORE_ANIMATION_DURATION_S } from "../../../../constants/constants";
import Box from "../FramerMotion/Box";

import type { Stone, Player } from "../../../../types/types";

interface PlayerBoxProps {
  player: Player;
  enabled: boolean;
}

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
      duration: SCORE_ANIMATION_DURATION_S,
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
