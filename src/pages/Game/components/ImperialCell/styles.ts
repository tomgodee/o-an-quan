import { CELL_BORDER_WIDTH } from "constants/constants";

import { styled } from "@mui/system";

import Box from "../../../../components/FramerMotion/Box";

interface ImperialCellProps {
  reversed?: boolean;
  isScreenSm: boolean;
}

export const ImperialCell = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reversed" && prop !== "isScreenSm",
})<ImperialCellProps>((props) => {
  const { isScreenSm, reversed, theme } = props;

  const getBorderTopLeftRadius = () => {
    if (isScreenSm) return reversed ? "50%" : 0;
    return reversed ? "50%" : 0;
  };
  const getBorderBottomLeftRadius = () => {
    if (isScreenSm) return reversed ? "50%" : 0;
    return reversed ? 0 : "50%";
  };
  const getBorderTopRightRadius = () => {
    if (isScreenSm) return reversed ? 0 : "50%";
    return reversed ? "50%" : 0;
  };
  const getBorderBottomRightRadius = () => {
    if (isScreenSm) return reversed ? 0 : "50%";
    return reversed ? 0 : "50%";
  };

  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: isScreenSm ? "96px 6px" : "66px 96px",
    width: "100%",
    backgroundColor: theme.palette.darkerBackgroundColor.main,
    border: `${CELL_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
    borderTopLeftRadius: getBorderTopLeftRadius(),
    borderBottomLeftRadius: getBorderBottomLeftRadius(),
    borderTopRightRadius: getBorderTopRightRadius(),
    borderBottomRightRadius: getBorderBottomRightRadius(),
  };
});
