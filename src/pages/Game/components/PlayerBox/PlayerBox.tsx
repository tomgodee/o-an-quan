import "./style.css";

import { animate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { generateRandomName } from "utils/players";

import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Box from "../../../../components/FramerMotion/Box";
import { SCORE_ANIMATION_DURATION_S } from "../../../../constants/constants";
import { useBreakPoints } from "../../../../customHooks";

import type { Stone, Player } from "../../../../types/types";

interface PlayerBoxProps {
  player: Player;
  enabled: boolean;
  isPlayerOne: boolean;
  updatePlayerName: (name: string, isPlayerOne: boolean) => void;
}

const getStonesValue = (stones: Stone[]) => {
  return stones.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.value;
  }, 0);
};

const PlayerBox = (props: PlayerBoxProps) => {
  const { player, enabled, isPlayerOne, updatePlayerName } = props;
  const { palette } = useTheme();
  const { isScreenSm } = useBreakPoints();

  const [score, setScore] = useState(0);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const flexDirection = useMemo(() => {
    if (isScreenSm) {
      return isPlayerOne ? "column" : "column-reverse";
    }
    return isPlayerOne ? "row" : "row-reverse";
  }, [isPlayerOne, isScreenSm]);

  const handleOnClickIcon = () => {
    updatePlayerName(generateRandomName(), isPlayerOne);
  };

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
      justifyContent={isScreenSm ? "center" : "flex-start"}
      width="100%"
      mr={!isScreenSm ? (isPlayerOne ? 10 : 0) : 0}
      ml={!isScreenSm ? (isPlayerOne ? 0 : 10) : 0}
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
        mb={isScreenSm ? (isPlayerOne ? 0 : 2) : 0}
        mt={isScreenSm ? (isPlayerOne ? 2 : 0) : 0}
        ml={isPlayerOne ? 2 : 0}
        mr={isPlayerOne ? 0 : 2}
        position="relative"
        display="flex"
        alignItems="center"
        flexDirection={isPlayerOne ? "row-reverse" : "row"}
      >
        <Typography
          textAlign="center"
          color={enabled ? palette.textColor.main : palette.grey[600]}
        >
          {player.name}
        </Typography>
        <Box
          position={isScreenSm ? "absolute" : "initial"}
          top={isScreenSm ? 10 : undefined}
          right={isScreenSm ? -65 : undefined}
          onClick={handleOnClickIcon}
          onMouseOver={() => setIsIconHovered(true)}
          onMouseLeave={() => setIsIconHovered(false)}
          p={0.75}
          borderRadius={2}
          zIndex={1}
          sx={{
            color: isIconHovered ? palette.iconBold.main : palette.icon.main,
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faRotate} size={"2x"} />
        </Box>
      </Box>
    </Box>
  );
};

export default PlayerBox;
