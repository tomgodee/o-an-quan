import { Palette } from "@mui/material";

export const getCellVariants = (palette: Palette) => {
  return {
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
};

export const getHandVariants = (screenSize: string, offsetX: number) => {
  offsetX = 120;
  if (screenSize === "Xl") {
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
  }
  if (screenSize === "Lg") {
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
  }
  if (screenSize === "Md") {
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
  }
  if (screenSize === "Sm") {
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
      gettingStonesHandTopRightAnimate: {
        x: [null, "0%", `${offsetX}%`, `${offsetX}%`],
        y: [null, "20%", "70%", "70%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandBottomRightAnimate: {
        x: [null, "0%", `${offsetX}%`, `${offsetX}%`],
        y: [null, "20%", "-54%", "-54%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandTopLeftAnimate: {
        x: [null, "0%", `-${offsetX}%`, `-${offsetX}%`],
        y: [null, "20%", "70%", "70%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandBottomLeftAnimate: {
        x: [null, "0%", `-${offsetX}%`, `-${offsetX}%`],
        y: [null, "20%", "-54%", "-54%"],
        opacity: [null, 1, 1, 0],
      },
      droppingStoneHandInitial: {
        y: "20%",
      },
      droppingStoneHandLeftAnimate: {
        x: `-${offsetX}%`,
        y: "20%",
      },
      droppingStoneHandRightAnimate: {
        x: `${offsetX}%`,
        y: "20%",
      },
      droppingStoneHandTopRightAnimate: {
        x: `${offsetX}%`,
        y: "70%",
      },
      droppingStoneHandBottomRightAnimate: {
        x: `${offsetX}%`,
        y: "-54%",
      },
      droppingStoneHandTopLeftAnimate: {
        x: `-${offsetX}%`,
        y: "70%",
      },
      droppingStoneHandBottomLeftAnimate: {
        x: `-${offsetX}%`,
        y: "-54%",
      },
    };
  }
  if (screenSize === "Xs") {
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
  }
};
