import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/o-an-quan",
    element: <Root />,
    children: [
      {
        path: "/o-an-quan/game",
        element: <Game />,
      },
      {
        path: "/o-an-quan/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
