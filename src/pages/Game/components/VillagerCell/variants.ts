import { Palette } from "@mui/material";

export const getCellVariants = (palette: Palette, isScreenSm: boolean) => {
  return {
    leftButtonInitial: {
      x: isScreenSm ? "0%" : "-50%",
      y: isScreenSm ? "-30%" : "0%",
      opacity: 0,
      scale: 0,
      backgroundImage: `linear-gradient(to right, ${palette.tertiary.main} 50%, ${palette.quaternary.main} 50%)`,
      backgroundSize: "200% 100%",
      backgroundPosition: "left",
    },
    leftButtonWhileHover: {
      scale: 1.2,
      backgroundPosition: "right",
    },
    leftButtonVisible: {
      x: isScreenSm ? "-80%" : "-50%",
      y: isScreenSm ? "-70%" : "-70%",
      rotate: isScreenSm ? 0 : 90,
      opacity: 1,
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
      x: isScreenSm ? "0%" : "50%",
      y: isScreenSm ? "-30%" : "0%",
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
    rightButtonVisible: {
      x: isScreenSm ? "80%" : "50%",
      y: isScreenSm ? "-70%" : "70%",
      rotate: isScreenSm ? 0 : 90,
      opacity: 1,
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
  if (screenSize === "Xs") {
    return {
      gettingStonesHandInitial: {
        x: "0%",
        y: "40%",
        opacity: 0.2,
      },
      gettingStonesHandLeftAnimate: {
        x: ["0%", "0%", "0%", "0%"],
        y: [null, "10%", "-115%", "-115%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandRightAnimate: {
        x: ["0%", "0%", "0%", "0%"],
        y: [null, "10%", "135%", "135%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandTopRightAnimate: {
        x: ["0%", "0%", "-89%", "-89%"],
        y: [null, "10%", "90%", "90%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandBottomRightAnimate: {
        x: ["0%", "0%", "89%", "89%"],
        y: [null, "10%", "90%", "90%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandTopLeftAnimate: {
        x: ["0%", "0%", "-89%", "-89%"],
        y: [null, "10%", "-120%", "-120%"],
        opacity: [null, 1, 1, 0],
      },
      gettingStonesHandBottomLeftAnimate: {
        x: ["0%", "0%", "89%", "89%"],
        y: [null, "10%", "-120%", "-120%"],
        opacity: [null, 1, 1, 0],
      },
      droppingStoneHandInitial: {
        x: "0%",
        y: "10%",
      },
      droppingStoneHandLeftAnimate: {
        x: "0%",
        y: "-115%",
      },
      droppingStoneHandRightAnimate: {
        x: "0%",
        y: "135%",
      },
      droppingStoneHandTopRightAnimate: {
        x: "-89%",
        y: "90%",
      },
      droppingStoneHandBottomRightAnimate: {
        x: "89%",
        y: "90%",
      },
      droppingStoneHandTopLeftAnimate: {
        x: "-89%",
        y: "-120%",
      },
      droppingStoneHandBottomLeftAnimate: {
        x: "89%",
        y: "-120%",
      },
    };
  }

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
      y: [null, "20%", "-53.875%", "-53.875%"],
      opacity: [null, 1, 1, 0],
    },
    gettingStonesHandTopLeftAnimate: {
      x: [null, "0%", `-${offsetX}%`, `-${offsetX}%`],
      y: [null, "20%", "70%", "70%"],
      opacity: [null, 1, 1, 0],
    },
    gettingStonesHandBottomLeftAnimate: {
      x: [null, "0%", `-${offsetX}%`, `-${offsetX}%`],
      y: [null, "20%", "-53.875%", "-53.875%"],
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
      y: "-53.875%",
    },
    droppingStoneHandTopLeftAnimate: {
      x: `-${offsetX}%`,
      y: "70%",
    },
    droppingStoneHandBottomLeftAnimate: {
      x: `-${offsetX}%`,
      y: "-53.875%",
    },
  };
};
