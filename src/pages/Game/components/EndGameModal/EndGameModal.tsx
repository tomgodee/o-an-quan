import laurel_wealth from "assets/laurel_wealth_a.png";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { calculateStonesValue } from "utils/stone";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";

import Box from "components/FramerMotion/Box";
import DialogActions from "components/FramerMotion/DialogActions";
import DialogContent from "components/FramerMotion/DialogContent";

import type { Player } from "types/types";
import type { Engine } from "tsparticles-engine";

interface EndGameModalProps {
  open: boolean;
  player: Player;
  initGame: () => void;
}

const EndGameModal = (props: EndGameModalProps) => {
  const { open, player, initGame } = props;
  const { palette } = useTheme();
  const handleClick = () => {
    initGame();
  };

  const variants = {
    nameInitial: {
      y: "20%",
      opacity: 0,
    },
    nameAnimate: {
      y: "0%",
      opacity: 1,
    },
    laurelWealthInitial: {
      x: "-50%",
      y: "-50%",
    },
  };

  const customInit = async (engine: Engine) => {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  };

  const options = {
    fullScreen: {
      zIndex: 1,
    },
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ["#00FFFC", "#FC00FF", "#fffc00"],
      },
      shape: {
        type: ["circle", "square", "triangle"],
        options: {},
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 20,
        },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    emitters: {
      life: {
        count: 0,
        duration: 0.15,
        delay: 0.4,
      },
      rate: {
        delay: 0.1,
        quantity: 150,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };

  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        sx: {
          border: `6px solid ${palette.quinary.main}`,
        },
      }}
    >
      <Particles id="tsparticles" init={customInit} options={options as any} />

      <DialogTitle
        variant="endDialogBodyTitle"
        color={palette.secondary.main}
        fontWeight={800}
        textAlign="center"
      >
        VICTORY
      </DialogTitle>
      <DialogContent
        variants={variants}
        initial="nameInitial"
        animate="nameAnimate"
        transition={{
          opacity: {
            duration: 2,
          },
          y: {
            duration: 2,
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={8}
          height={180}
        >
          <Box width="60%">
            <DialogContentText
              color={palette.tertiary.main}
              fontWeight={800}
              variant="endDialogBodyText"
            >
              {player.name}
            </DialogContentText>
          </Box>

          <Box
            position="relative"
            width="30%"
            sx={{
              userSelect: "none",
            }}
          >
            <Box
              position="absolute"
              top="55%"
              left="50%"
              variants={variants}
              initial="laurelWealthInitial"
            >
              <img width={140} src={laurel_wealth} alt="laurel wealth" />
            </Box>
            <DialogContentText
              color={palette.quaternary.main}
              fontWeight={800}
              variant="endDialogBodyText"
              px={3}
              py={2}
              textAlign="center"
            >
              {calculateStonesValue(player.stones)}
            </DialogContentText>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          padding: "20px",
        }}
        variants={variants}
        initial="nameInitial"
        animate="nameAnimate"
        transition={{
          opacity: {
            duration: 0.5,
            delay: 2,
          },
        }}
      >
        <Button
          onClick={handleClick}
          color="primary"
          variant="contained"
          sx={{
            fontWeight: 800,
          }}
        >
          PLAY AGAIN
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndGameModal;
