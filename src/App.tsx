import "./App.css";

import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import reactLogo from "./assets/react.svg";
import theme from "./theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>This is App</div>
      </ThemeProvider>
    </>
  );
}

export default App;
