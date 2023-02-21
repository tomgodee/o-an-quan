import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import Root from "./routes/root";
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/o-an-quan",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);
