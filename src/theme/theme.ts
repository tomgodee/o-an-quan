import { orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
    quaternary: PaletteOptions["primary"];
    quinary: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface TypographyVariants {
    score: React.CSSProperties;
    dialogBodyTitle: React.CSSProperties;
    dialogBodyText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    score?: React.CSSProperties;
    dialogBodyTitle?: React.CSSProperties;
    dialogBodyText?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    tertiary: true;
    quaternary: true;
    quinary: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    score: true;
    dialogBodyTitle: true;
    dialogBodyText: true;
  }
}
// ff595e-ffca3a-8ac926-1982c4-6a4c93
let theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    htmlFontSize: 10,
    score: {
      fontSize: "4rem",
    },
    dialogBodyTitle: {
      fontSize: "3.2rem",
    },
    dialogBodyText: {
      fontSize: "2.8rem",
    },
  },
  palette: {
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
});

theme = responsiveFontSizes(theme, {});

export { theme };
