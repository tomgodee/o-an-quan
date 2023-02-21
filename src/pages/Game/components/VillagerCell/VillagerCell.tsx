import { motion, Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../../../../constants/constants";
import { faHand, faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";

import { useBreakPoints } from "../../../../customHooks/useBreakPoints";
import Box from "../../components/FramerMotion/Box";
import { VillagerCell as VillagerCellComponent } from "./styles";

import { getCellValue, getPebbleImage } from "../../../../utils";
import type { Cell, DirectionType } from "../../../../types/types";
import Typography from "@mui/material/Typography";

interface VillagerCellProps {
  reversed?: boolean;
  cell: Cell;
  direction: DirectionType;
  isSelected: boolean;
  isInteractable: boolean;
  handleClickDirectionButton: (cell: Cell, direction: DirectionType) => void;
  isClicked: boolean;
  setClickedCell: React.Dispatch<React.SetStateAction<Cell | null>>;
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
  } = props;
  const { isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl } =
    useBreakPoints();
  const { palette } = useTheme();

  const [isHovered, setIsHovered] = useState(false);
  const [isLeftButtonClicked, setIsLeftButtonClicked] = useState(false);
  const [isRightButtonClicked, setIsRightButtonClicked] = useState(false);
  const [cellWidth, setCellWidth] = useState(0);
  // const [isGrabbingHandShown, setIsGrabbingHandShown] = useState(false);
  const cellRef = useRef<HTMLDivElement>(null);
  // if (cell.id === 10) {
  //   console.log("isSelected", isSelected);
  //   console.log("direction", direction);
  //   console.log(
  //     "cell.shouldShowDroppingAnimation",
  //     cell.shouldShowDroppingAnimation
  //   );
  // }

  const handleResize = () => {
    if (cellRef.current !== null) {
      setCellWidth(cellRef.current.clientWidth || 0);
    }
  };

  const handleClickDirectionButtons = (
    event: React.MouseEvent<HTMLDivElement>,
    direction: DirectionType
  ) => {
    if (isClicked) {
      event.stopPropagation();

      setClickedCell(null);

      setIsLeftButtonClicked(direction === DIRECTIONS.left);
      setIsRightButtonClicked(direction === DIRECTIONS.left);

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

      if (cellRef && cellRef.current) {
        cellRef.current.focus();
        // console.log("focus");
      }
    }
  };

  const cellVariants = {
    leftButtonInitial: {
      x: "0%",
      y: "-30%",
      backgroundImage: `linear-gradient(to right, ${palette.tertiary.main} 50%, ${palette.quaternary.main} 50%)`,
      backgroundSize: "200% 100%",
      backgroundPosition: "left",
      opacity: 0,
      scale: 0,
    },
    leftButtonWhileHover: {
      scale: 1.2,
      backgroundPosition: "right",
    },
    leftButtonWhenNotShownWhileHover: {
      backgroundPosition: "right",
    },
    leftButtonVisible: {
      opacity: 1,
      x: "-80%",
      y: "-70%",
      scale: 1,
    },
    hidden: {
      opacity: 0,
    },
    onClickLeftButtonHidden: {
      opacity: 0,
      x: "-80%",
      y: "-70%",
      scale: 1.5,
      backgroundPosition: "right",
    },
    rightButtonInitial: {
      x: "0%",
      y: "-30%",
      backgroundImage: `linear-gradient(to right, ${palette.quaternary.main} 50%, ${palette.tertiary.main} 50%)`,
      backgroundSize: "200% 100%",
      backgroundPosition: "right",
      opacity: 0,
      scale: 0,
      zIndex: 1,
    },
    rightButtonWhileHover: {
      scale: 1.2,
      backgroundPosition: "left",
      zIndex: 1,
    },
    rightButtonWhenNotShownWhileHover: {
      backgroundPosition: "left",
      zIndex: 1,
    },
    rightButtonVisible: {
      opacity: 1,
      x: "80%",
      y: "-70%",
      scale: 1,
      zIndex: 1,
    },
    onClickRightButtonHidden: {
      opacity: 0,
      x: "80%",
      y: "-70%",
      scale: 1.5,
      backgroundPosition: "left",
    },
  };

  const handVariants = useMemo(() => {
    const BORDER_WIDTH = 6;
    // HAND_WIDTH will change based on screen's size
    const HAND_WIDTH = 80;
    const offsetX = ((cellWidth / 2 + BORDER_WIDTH) / HAND_WIDTH) * 100;

    if (isScreenXl)
      return {
        gettingStonesHandInitial: {
          x: "-50%",
          y: "40%",
          opacity: 0.2,
        },
        gettingStonesHandLeftAnimate: {
          x: "-50%",
          y: "0%",
          opacity: 1,
        },
      };
    if (isScreenLg)
      return {
        gettingStonesHandInitial: {
          x: "-50%",
          y: "40%",
          opacity: 0.2,
        },
        gettingStonesHandLeftAnimate: {
          x: "-50%",
          y: "0%",
          opacity: 1,
        },
      };
    if (isScreenMd)
      return {
        gettingStonesHandInitial: {
          x: "-50%",
          y: "40%",
          opacity: 0.2,
        },
        gettingStonesHandLeftAnimate: {
          x: "-50%",
          y: "10%",
          opacity: 1,
        },
      };
    if (isScreenSm)
      return {
        gettingStonesHandInitial: {
          x: "-1%",
          y: "60%",
          opacity: 0.2,
        },
        gettingStonesHandLeftAnimate: {
          x: [null, "0%", `-${offsetX}%`, `-${offsetX}%`],
          y: [null, "20%", "20%", "20%"],
          opacity: [null, 1, 1, 0],
        },
        gettingStonesHandRightAnimate: {
          x: [null, "0%", `${offsetX}%`, `${offsetX}%`],
          y: [null, "20%", "20%", "20%"],
          opacity: [null, 1, 1, 0],
        },
        droppingStoneHandLeftInitial: {
          x: `${offsetX}%`,
          y: "20%",
          opacity: 1,
        },
        droppingStoneHandRightInitial: {
          x: `-${offsetX}%`,
          y: "20%",
          opacity: 1,
        },
        droppingStoneHandLeftAnimate: {
          x: `-${offsetX}%`,
          y: "20%",
        },
        droppingStoneHandRightAnimate: {
          x: `${offsetX}%`,
          y: "20%",
        },
      };
    if (isScreenXs)
      return {
        gettingStonesHandInitial: {
          x: "-50%",
          y: "40%",
          opacity: 0.2,
        },
        gettingStonesHandLeftAnimate: {
          x: "-50%",
          y: "30%",
          opacity: 1,
        },
      };
    return "1x";
  }, [isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl, cellWidth]);

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
      if (direction === DIRECTIONS.left) {
        return "droppingStoneHandLeftInitial";
      } else if (direction === DIRECTIONS.right) {
        return "droppingStoneHandRightInitial";
      }
    } else if (isSelected) return "gettingStonesHandInitial";

    return undefined;
  };

  const getHandAnimate = () => {
    if (cell.shouldShowDroppingAnimation) {
      if (direction === DIRECTIONS.left) {
        return "droppingStoneHandLeftAnimate";
      } else if (direction === DIRECTIONS.right) {
        return "droppingStoneHandRightAnimate";
      }
    } else if (isSelected) {
      if (direction === DIRECTIONS.left) {
        return "gettingStonesHandLeftAnimate";
      } else if (direction === DIRECTIONS.right) {
        return "gettingStonesHandRightAnimate";
      }
    }

    return undefined;
  };

  const getHandDuration = () => {
    // Make the hand to disappear at the very last moment
    if (isSelected) return { duration: 2, times: [0, 0.5, 0.99999, 1] };
    else if (cell.shouldShowDroppingAnimation) return { duration: 2 };
    return { duration: 1 };
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
      {/* {cell.id === 6 && (
        <Box
          position="absolute"
          // left="50%"
          top="0%"
          zIndex={10}
          variants={handVariants as Variants}
          initial="droppingStoneHandInitial"
          animate={getHandAnimate()}
          transition={{ duration: getHandDuration() }}
        >
          <FontAwesomeIcon icon={faHand} size={iconSize} />
        </Box>
      )} */}

      {/* {isGrabbingHandShown && (
        <Box
          position="absolute"
          left="50%"
          top="0%"
          zIndex={10}
          variants={handVariants as Variants}
          initial="gettingStonesHandLeftAnimate"
          transition={{ duration: 0 }}
        >
          <FontAwesomeIcon icon={faHandBackFist} size={iconSize} />
        </Box>
      )} */}

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
          {getCellValue(cell)}
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
        onClick={(event) => handleClickDirectionButtons(event, DIRECTIONS.left)}
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
          handleClickDirectionButtons(event, DIRECTIONS.right)
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
