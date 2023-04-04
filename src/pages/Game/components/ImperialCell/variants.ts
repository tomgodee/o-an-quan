import { Palette } from "@mui/material";

export const getHandVariants = (
  screenSize: string,
  offsetXInitial: number,
  offsetXAnimate: number
) => {
  if (screenSize === "Xs") {
    return {
      droppingStoneHandRightInitial: {
        x: "0%",
        y: "-40%",
      },
      droppingStoneHandLeftInitial: {
        x: "0%",
        y: "100%",
      },
      droppingStoneHandTopRightAnimate: {
        x: "-103.25%",
        y: "-120%",
      },
      droppingStoneHandBottomRightAnimate: {
        x: "103.25%",
        y: "-120%",
      },
      droppingStoneHandTopLeftAnimate: {
        x: "-103.25%",
        y: "231%",
      },
      droppingStoneHandBottomLeftAnimate: {
        x: "103.25%",
        y: "231%",
      },
    };
  }

  return {
    droppingStoneHandRightInitial: {
      x: `-${offsetXInitial}%`,
      y: "70%",
    },
    droppingStoneHandLeftInitial: {
      x: `${offsetXInitial}%`,
      y: "70%",
    },
    droppingStoneHandTopRightAnimate: {
      x: `-${offsetXAnimate}%`,
      y: "144%",
    },
    droppingStoneHandBottomRightAnimate: {
      x: `-${offsetXAnimate}%`,
      y: "20%",
    },
    droppingStoneHandTopLeftAnimate: {
      x: `${offsetXAnimate}%`,
      y: "144%",
    },
    droppingStoneHandBottomLeftAnimate: {
      x: `${offsetXAnimate}%`,
      y: "20%",
    },
  };
};
