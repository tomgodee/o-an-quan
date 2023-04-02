import { Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { calculateStonesValue } from "utils/stone";

import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import {
  DIRECTIONS,
  SCORE_ANIMATION_DURATION_S,
} from "../../../../constants/constants";
import { useBreakPoints } from "../../../../customHooks/useBreakPoints";
import { getPebbleImage } from "../../../../utils";
import Box from "../../components/FramerMotion/Box";
import { VillagerCell as VillagerCellComponent } from "./styles";
import { getCellVariants, getHandVariants } from "./variants";

import type { Cell, DirectionType } from "../../../../types/types";
interface VillagerCellProps {
  reversed?: boolean;
  cell: Cell;
  direction: DirectionType;
  isSelected: boolean;
  isInteractable: boolean;
  handleClickDirectionButton: (cell: Cell, direction: DirectionType) => void;
  isClicked: boolean;
  setClickedCell: React.Dispatch<React.SetStateAction<Cell | null>>;
  villagerCellWidth: number;
  setVillagerCellWidth: React.Dispatch<React.SetStateAction<number>>;
}

function VillagerCell(props: VillagerCellProps) {
  const {
    reversed,
    cell,
    direction,
    handleClickDirectionButton,
    isSelected,
    isInteractable,
    isClicked,
    setClickedCell,
    villagerCellWidth,
    setVillagerCellWidth,
  } = props;
  const { isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl } =
    useBreakPoints();
  const { palette } = useTheme();

  const [isHovered, setIsHovered] = useState(false);
  const [isLeftButtonClicked, setIsLeftButtonClicked] = useState(false);
  const [isRightButtonClicked, setIsRightButtonClicked] = useState(false);
  const cellRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (cellRef.current !== null) {
      setVillagerCellWidth(cellRef.current.clientWidth || 0);
    }
  };

  const handleClickDirectionButtons = (
    event: React.MouseEvent<HTMLDivElement>,
    direction: DirectionType
  ) => {
    if (isClicked) {
      event.stopPropagation();

      setClickedCell(null);

      setIsLeftButtonClicked(direction === DIRECTIONS.LEFT);
      setIsRightButtonClicked(direction === DIRECTIONS.LEFT);

      handleClickDirectionButton(cell, direction);
    }
  };

  const handleClickCell = () => {
    if (isInteractable) {
      setClickedCell((prevState) => {
        return prevState?.id === cell.id ? null : cell;
      });
      setIsLeftButtonClicked(false);
      setIsRightButtonClicked(false);
    }
  };

  const cellVariants = getCellVariants(palette);

  const handVariants = useMemo(() => {
    const BORDER_WIDTH = 6;
    // HAND_WIDTH will change based on screen's size
    const HAND_WIDTH = 80;
    const wholevillagerCellWidth = (villagerCellWidth / 2 + BORDER_WIDTH) * 2;
    // multiply by 2 means getting the width of the whole cell
    // multiply by 100 means the hand will move a distance equals to the cell's width
    const offsetX = (wholevillagerCellWidth / HAND_WIDTH) * 100;
    // console.log("villagerCellWidth", villagerCellWidth);

    if (isScreenXl) return getHandVariants("Xl", offsetX);
    if (isScreenLg) return getHandVariants("Lg", offsetX);
    if (isScreenMd) return getHandVariants("Md", offsetX);
    if (isScreenSm) return getHandVariants("Sm", offsetX);
    if (isScreenXs) return getHandVariants("Xs", offsetX);
  }, [
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
    villagerCellWidth,
  ]);

  const animateLeftButton = () => {
    if (isClicked) return "leftButtonVisible";
    else if (!isClicked && isLeftButtonClicked)
      return "onClickLeftButtonHidden";
    else if (!isClicked && !isLeftButtonClicked) return "hidden";
  };

  const animateRightButton = () => {
    if (isClicked) return "rightButtonVisible";
    else if (!isClicked && isRightButtonClicked)
      return "onClickRightButtonHidden";
    else if (!isClicked && !isRightButtonClicked) return "hidden";
  };

  const getHandInitial = () => {
    if (cell.shouldShowDroppingAnimation) {
      return "droppingStoneHandInitial";
    } else if (isSelected) return "gettingStonesHandInitial";

    return undefined;
  };

  const getHandAnimate = () => {
    if (cell.shouldShowDroppingAnimation) {
      if (direction === DIRECTIONS.LEFT) {
        if (cell.id === 1) return "droppingStoneHandTopLeftAnimate";
        else if (cell.id === 6) return "droppingStoneHandBottomLeftAnimate";
        return "droppingStoneHandLeftAnimate";
      } else if (direction === DIRECTIONS.RIGHT) {
        if (cell.id === 5) return "droppingStoneHandTopRightAnimate";
        else if (cell.id === 10) return "droppingStoneHandBottomRightAnimate";
        return "droppingStoneHandRightAnimate";
      }
    } else if (isSelected) {
      if (direction === DIRECTIONS.LEFT) {
        if (cell.id === 1) return "gettingStonesHandTopLeftAnimate";
        else if (cell.id === 6) return "gettingStonesHandBottomLeftAnimate";
        return "gettingStonesHandLeftAnimate";
      } else if (direction === DIRECTIONS.RIGHT) {
        if (cell.id === 5) return "gettingStonesHandTopRightAnimate";
        else if (cell.id === 10) return "gettingStonesHandBottomRightAnimate";
        else return "gettingStonesHandRightAnimate";
      }
    }

    return undefined;
  };

  const getHandDuration = () => {
    // Make the hand to disappear at the very last moment
    if (isSelected)
      return {
        duration: SCORE_ANIMATION_DURATION_S,
        times: [0, 0.5, 0.9999, 1],
      };
    else if (cell.shouldShowDroppingAnimation) {
      return { duration: SCORE_ANIMATION_DURATION_S };
    }
    return { duration: SCORE_ANIMATION_DURATION_S };
  };

  const iconSize = useMemo(() => {
    if (isScreenXl) return "8x";
    if (isScreenLg) return "7x";
    if (isScreenMd) return "6x";
    if (isScreenSm) return "5x";
    if (isScreenXs) return "4x";
    return "1x";
  }, [isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl]);

  useEffect(() => {
    if (!cell.stones.length) {
      setIsLeftButtonClicked(false);
      setIsRightButtonClicked(false);
    }
  }, [cell.stones.length]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cellRef]);

  // if (cell.id === 4) {
  //   console.log(
  //     "4 shouldShowDroppingAnimation",
  //     cell.shouldShowDroppingAnimation
  //   );
  // }

  return (
    <VillagerCellComponent
      reversed={reversed || false}
      isInteractable={isInteractable}
      onClick={handleClickCell}
      ref={cellRef}
      onMouseEnter={() => {
        if (isInteractable) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isSelected || cell.shouldShowDroppingAnimation) && (
        <Box
          position="absolute"
          top="0%"
          zIndex={10}
          variants={handVariants as Variants}
          initial={getHandInitial()}
          animate={getHandAnimate()}
          transition={getHandDuration()}
        >
          <FontAwesomeIcon icon={faHand} size={iconSize} />
        </Box>
      )}

      <Box position="absolute" width="80%" height="80%">
        {cell.stones.map((stone) => {
          return (
            <Box
              key={stone.id}
              height={20}
              width={20}
              position="absolute"
              top={`${stone.top}%`}
              left={`${stone.left}%`}
              initial={{
                rotate: stone.rotate,
                y: 0,
              }}
              animate={{
                opacity: isLeftButtonClicked ? 0 : 1,
                y: isHovered ? [0, -4, 0] : 0,
              }}
              transition={{
                y: {
                  duration: isHovered ? 2 : 1,
                  repeat: isHovered ? Infinity : 0,
                },
              }}
            >
              <img
                src={getPebbleImage(stone.id)}
                height="100%"
                width="100%"
                alt="pebble_1"
              />
            </Box>
          );
        })}
      </Box>

      <Box
        position="absolute"
        bottom="-5px"
        left="50%"
        sx={{
          transform: "translateX(-50%)",
        }}
      >
        <Typography fontWeight={700} variant="caption">
          {calculateStonesValue(cell.stones)}
        </Typography>
      </Box>

      <Box
        position="absolute"
        top="50%"
        left="0%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={60}
        height={60}
        border={`4px solid ${palette.secondary.main}`}
        borderRadius="50%"
        variants={cellVariants}
        initial="leftButtonInitial"
        animate={animateLeftButton()}
        whileHover={
          isClicked
            ? "leftButtonWhileHover"
            : "leftButtonWhenNotShownWhileHover"
        }
        transition={{
          opacity: {
            duration: 0.5,
          },
        }}
        sx={{
          cursor: "grab",
          transition: "background-position 0.25s",
          zIndex: 1,
        }}
        onClick={(event) => handleClickDirectionButtons(event, DIRECTIONS.LEFT)}
      >
        <FontAwesomeIcon icon={faCircleLeft} size="2x" />
      </Box>

      <Box
        position="absolute"
        top="50%"
        right="0%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={60}
        height={60}
        border={`4px solid ${palette.secondary.main}`}
        borderRadius="50%"
        variants={cellVariants}
        initial="rightButtonInitial"
        animate={animateRightButton()}
        whileHover={
          isClicked
            ? "rightButtonWhileHover"
            : "rightButtonWhenNotShownWhileHover"
        }
        transition={{
          opacity: {
            duration: 0.5,
          },
        }}
        sx={{
          cursor: "grab",
          transition: "background-position 0.25s",
          zIndex: 100,
        }}
        onClick={(event) =>
          handleClickDirectionButtons(event, DIRECTIONS.RIGHT)
        }
      >
        <FontAwesomeIcon icon={faCircleRight} size="2x" />
      </Box>
    </VillagerCellComponent>
  );
}

VillagerCell.defaultProps = {
  reversed: false,
} as Partial<VillagerCellProps>;

const component = VillagerCell;

export default component;
