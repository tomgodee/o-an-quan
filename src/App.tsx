import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";

import CssBaseline from "@mui/material/CssBaseline";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeProvider,
} from "@mui/material/styles";

import reactLogo from "./assets/react.svg";
import theme from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssVarsProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <div>This is App</div>
          </ThemeProvider>
        </CssVarsProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
