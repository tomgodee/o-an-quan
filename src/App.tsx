import "./App.css";

import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import reactLogo from "./assets/react.svg";
import theme from "./theme";

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <StyledAvatar>OP</StyledAvatar>
          <Button variant="contained" color="neutral">
            aaab
          </Button>
          <Typography variant="poster">Responsive h3</Typography>
          <Typography variant="h4">Responsive h4</Typography>
          <Typography variant="h5">Responsive h5</Typography>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
