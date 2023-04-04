import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useBreakPoints = () => {
  const theme = useTheme();
  const isScreenXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isScreenSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const isScreenLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isScreenXl = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
  };
};

export default {
  useBreakPoints,
};
