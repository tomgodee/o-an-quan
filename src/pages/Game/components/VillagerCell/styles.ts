import Box from "components/FramerMotion/Box";
import { CELL_BORDER_WIDTH, CELL_THIN_BORDER_WIDTH } from "constants";

import { styled } from "@mui/system";

interface VillagerCellProps {
  reversed: boolean;
  isInteractable: boolean;
  isScreenSm: boolean;
}

export const VillagerCell = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "reversed" && prop !== "isInteractable" && prop !== "isScreenSm",
})<VillagerCellProps>((props) => {
  const { theme, reversed, isInteractable, isScreenSm } = props;

  const getBorderTopWidth = () => {
    if (isScreenSm) {
      return reversed
        ? `${CELL_THIN_BORDER_WIDTH}px`
        : `${CELL_BORDER_WIDTH}px`;
    }
    return `${CELL_THIN_BORDER_WIDTH}px`;
  };
  const getBorderBottomWidth = () => {
    if (isScreenSm) {
      return reversed
        ? `${CELL_BORDER_WIDTH}px`
        : `${CELL_THIN_BORDER_WIDTH}px`;
    }
    return `${CELL_THIN_BORDER_WIDTH}px`;
  };
  const getBorderRightWidth = () => {
    if (isScreenSm) {
      return `${CELL_THIN_BORDER_WIDTH}px`;
    }
    return reversed ? `${CELL_THIN_BORDER_WIDTH}px` : `${CELL_BORDER_WIDTH}px`;
  };
  const getBorderLeftWidth = () => {
    if (isScreenSm) {
      return `${CELL_THIN_BORDER_WIDTH}px`;
    }
    return reversed ? `${CELL_BORDER_WIDTH}px` : `${CELL_THIN_BORDER_WIDTH}px`;
  };

  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
    padding: 16,
    backgroundColor: theme.palette.darkerBackgroundColor.main,
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderTopWidth: getBorderTopWidth(),
    borderBottomWidth: getBorderBottomWidth(),
    borderRightWidth: getBorderRightWidth(),
    borderLeftWidth: getBorderLeftWidth(),
    "&:hover": {
      backgroundColor: isInteractable ? theme.palette.neutral.main : undefined,
      cursor: isInteractable ? "grab" : undefined,
    },
  };
});
