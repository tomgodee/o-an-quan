import { Palette } from "@mui/material";

export const getHandVariants = (
  screenSize: string,
  offsetXInitial: number,
  offsetXAnimate: number
) => {
  offsetXInitial = 39.87341772151899;
  if (screenSize === "Xl") {
    return {
      droppingStoneHandInitial: {
        x: 0,
        y: "60%",
      },
      droppingStoneHandTopRightAnimate: {
        x: 0,
        y: "120%",
      },
    };
  }
  if (screenSize === "Lg") {
    return {
      droppingStoneHandInitial: {
        x: 0,
        y: "60%",
      },
      droppingStoneHandTopRightAnimate: {
        x: 0,
        y: "120%",
      },
    };
  }
  if (screenSize === "Md") {
    return {
      droppingStoneHandInitial: {
        x: 0,
        y: "60%",
      },
      droppingStoneHandTopRightAnimate: {
        x: 0,
        y: "120%",
      },
    };
  }
  if (screenSize === "Sm") {
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
  }
  if (screenSize === "Xs") {
    return {
      droppingStoneHandInitial: {
        x: 0,
        y: "60%",
      },
      droppingStoneHandTopRightAnimate: {
        x: 0,
        y: "120%",
      },
    };
  }
};
