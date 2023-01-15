import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, red, orange } from "@mui/material/colors";

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
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    // fontSize: 16,
    htmlFontSize: 10,
    poster: {
      color: "red",
    },
  },
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: red[600],
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
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
