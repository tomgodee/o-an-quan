import stoneIcon from "assets/stone.png";
import {
  CELL_BORDER_WIDTH,
  CELL_THIN_BORDER_WIDTH,
  DIRECTIONS,
  SCORE_ANIMATION_DURATION_S,
  STONE_TYPES,
} from "constants/constants";
import { Variants } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { calculateStonesValue } from "utils/stone";

import { faHand } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@mui/material/Typography";

import { useBreakPoints, useIconSize } from "../../../../customHooks";
import { getPebbleImage } from "../../../../utils";
import Box from "../FramerMotion/Box";
import { ImperialCell as ImperialCellComponent } from "./styles";
import { getHandVariants } from "./variants";

import type { Cell, DirectionType, Stone } from "types/types";
interface ImperialCellProps {
  reversed?: boolean;
  cell: Cell;
  villagerCellWidth: number;
  imperialCellWidth: number;
  setImperialCellWidth: React.Dispatch<React.SetStateAction<number>>;
  lastTouchedVillagerCell: Cell;
  direction: DirectionType;
}

const isImperialStone = (stone: Stone) => stone.type === STONE_TYPES.IMPERIAL;

const ImperialCell = (props: ImperialCellProps) => {
  const {
    reversed,
    cell,
    villagerCellWidth,
    imperialCellWidth,
    setImperialCellWidth,
    lastTouchedVillagerCell,
    direction,
  } = props;
  const { isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl } =
    useBreakPoints();
  const { iconSize, iconWidth } = useIconSize();
  const imperialCellRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (imperialCellRef.current !== null) {
      setImperialCellWidth(imperialCellRef.current.clientWidth || 0);
    }
  };

  const handVariants = useMemo(() => {
    const halfImperialCellWidth = imperialCellWidth / 2 + CELL_BORDER_WIDTH;
    const halfVillagerCellWidth =
      villagerCellWidth / 2 + CELL_THIN_BORDER_WIDTH;

    const offsetXInitial =
      ((halfImperialCellWidth - halfVillagerCellWidth) /
        halfImperialCellWidth) *
      100;

    const offsetXAnimate =
      (halfVillagerCellWidth / iconWidth + halfImperialCellWidth / iconWidth) *
      100;

    if (isScreenXl)
      return getHandVariants("Xl", offsetXInitial, offsetXAnimate);
    if (isScreenLg)
      return getHandVariants("Lg", offsetXInitial, offsetXAnimate);
    if (isScreenMd)
      return getHandVariants("Md", offsetXInitial, offsetXAnimate);
    if (isScreenSm)
      return getHandVariants("Sm", offsetXInitial, offsetXAnimate);
    if (isScreenXs)
      return getHandVariants("Xs", offsetXInitial, offsetXAnimate);
  }, [
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
    villagerCellWidth,
    imperialCellWidth,
  ]);

  const getHandInitial = () => {
    if (cell.id === 11) return "droppingStoneHandRightInitial";
    if (cell.id === 0) return "droppingStoneHandLeftInitial";

    return undefined;
  };

  const getHandAnimate = () => {
    if (cell.shouldShowDroppingAnimation) {
      // TODO: Refactor this direction problem for better readability
      // add isTop variable will solve this
      if (direction === DIRECTIONS.RIGHT) {
        return lastTouchedVillagerCell.id <= 5
          ? "droppingStoneHandTopLeftAnimate"
          : "droppingStoneHandBottomLeftAnimate";
      } else if (direction === DIRECTIONS.LEFT) {
        return lastTouchedVillagerCell.id <= 5
          ? "droppingStoneHandTopRightAnimate"
          : "droppingStoneHandBottomRightAnimate";
      }
    }

    return undefined;
  };

  const getHandDuration = () => {
    return { duration: SCORE_ANIMATION_DURATION_S };
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imperialCellRef]);

  return (
    <ImperialCellComponent
      ref={imperialCellRef}
      reversed={reversed}
      isScreenSm={isScreenSm}
    >
      {cell.shouldShowDroppingAnimation && (
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
          {calculateStonesValue(cell.stones)}
        </Typography>
      </Box>
    </ImperialCellComponent>
  );
};

export default ImperialCell;
