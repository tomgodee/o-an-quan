import { PaletteMode } from "@mui/material";
import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties["color"];
    };
  }
  interface Palette {
    tertiary: Palette["primary"];
    quaternary: Palette["primary"];
    quinary: Palette["primary"];
    neutral: Palette["primary"];
    backgroundColor: Palette["primary"];
    darkerBackgroundColor: Palette["primary"];
    textColor: Palette["primary"];
    icon: Palette["primary"];
    iconBold: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
    quaternary: PaletteOptions["primary"];
    quinary: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
    backgroundColor: PaletteOptions["primary"];
    darkerBackgroundColor: PaletteOptions["primary"];
    textColor: PaletteOptions["primary"];
    icon: PaletteOptions["primary"];
    iconBold: PaletteOptions["primary"];
  }
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface TypographyVariants {
    score: React.CSSProperties;
    endDialogBodyTitle: React.CSSProperties;
    endDialogBodyText: React.CSSProperties;
    guideDialogBodyTitle: React.CSSProperties;
    guideDialogBodyText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    score?: React.CSSProperties;
    endDialogBodyTitle?: React.CSSProperties;
    endDialogBodyText?: React.CSSProperties;
    guideDialogBodyTitle?: React.CSSProperties;
    guideDialogBodyText?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    tertiary: true;
    quaternary: true;
    quinary: true;
    backgroundColor: true;
    darkerBackgroundColor: true;
    textColor: true;
    icon: true;
    iconBold: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    score: true;
    endDialogBodyTitle: true;
    endDialogBodyText: true;
    guideDialogBodyTitle: true;
    guideDialogBodyText: true;
  }
}

const theme = {
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    htmlFontSize: 10,
    score: {
      fontSize: "2rem",
      [breakpoints.up("sm")]: {
        fontSize: "4rem",
      },
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    endDialogBodyTitle: {
      fontSize: "3.2rem",
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    endDialogBodyText: {
      fontSize: "2.8rem",
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    guideDialogBodyTitle: {
      fontSize: "2rem",
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    guideDialogBodyText: {
      fontSize: "1.6rem",
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
  },
  status: {
    danger: orange[500],
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
};

const lightPallete = {
  primary: {
    main: "#8ac926",
  },
  secondary: {
    main: "#FF595E",
  },
  tertiary: {
    main: "#1982c4",
  },
  quaternary: {
    main: "#FFCA3A",
  },
  quinary: {
    main: "#6a4c93",
  },
  neutral: {
    main: "#edede9",
  },
  backgroundColor: {
    main: "#ffffff",
  },
  darkerBackgroundColor: {
    main: "#ffffffbf",
  },
  textColor: {
    main: "#121212",
  },
  icon: {
    main: "#00000033",
  },
  iconBold: {
    main: "#00000066",
  },
};

const darkPallete = {
  primary: {
    main: "#AFD5AA",
  },
  secondary: {
    main: "#AF4319 ",
  },
  tertiary: {
    main: "#EF959C ",
  },
  quaternary: {
    main: "#FDCA40",
  },
  quinary: {
    main: "#7494EA",
  },
  neutral: {
    main: "#EEEEEE",
  },
  backgroundColor: {
    main: "#242325",
  },
  darkerBackgroundColor: {
    main: "#183446",
  },
  textColor: {
    main: "#ffffff",
  },
  icon: {
    main: "#ffffffcc",
  },
  iconBold: {
    main: "#ffffff",
  },
};

export const getTheme = (mode: PaletteMode) => {
  return responsiveFontSizes(
    createTheme({
      ...theme,
      palette: {
        mode,
        ...(mode === "light" ? lightPallete : darkPallete),
      },
    }),
    {}
  );
};
