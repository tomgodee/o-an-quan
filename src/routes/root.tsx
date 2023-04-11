import React from "react";
import { Outlet } from "react-router-dom";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Box from "components/FramerMotion/Box";
import { useBreakPoints } from "customHooks/useBreakPoints";
import GuideModal from "pages/Game/components/GuideModal";
import getTheme from "../theme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Root() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [isThemeIconHovered, setIsThemeIconHovered] = React.useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = React.useState(false);
  const [isInfoIconHovered, setIsInfoIconHovered] = React.useState(false);
  const { isScreenSm } = useBreakPoints();

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box position="relative" bgcolor={theme.palette.backgroundColor.main}>
            <Outlet />

            <GuideModal
              isOpen={isGuideModalOpen}
              setIsOpen={setIsGuideModalOpen}
            />

            <Box
              position="absolute"
              top={isScreenSm ? 30 : 10}
              right={isScreenSm ? 100 : undefined}
              left={isScreenSm ? undefined : 10}
              onClick={() => setIsGuideModalOpen(true)}
              onMouseOver={() => setIsInfoIconHovered(true)}
              onMouseLeave={() => setIsInfoIconHovered(false)}
              p={0.75}
              borderRadius={2}
              zIndex={1}
              sx={{
                color: isInfoIconHovered
                  ? theme.palette.iconBold.main
                  : theme.palette.icon.main,
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} size={"3x"} />
            </Box>

            <Box
              position="absolute"
              top={isScreenSm ? 30 : 75}
              right={isScreenSm ? 30 : undefined}
              left={isScreenSm ? undefined : 10}
              onClick={() => colorMode.toggleColorMode()}
              onMouseOver={() => setIsThemeIconHovered(true)}
              onMouseLeave={() => setIsThemeIconHovered(false)}
              p={0.75}
              borderRadius={2}
              zIndex={1}
              sx={{
                color: isThemeIconHovered
                  ? theme.palette.iconBold.main
                  : theme.palette.icon.main,
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={mode === "light" ? faSun : faMoon}
                size={"3x"}
              />
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
