import Box from "../../components/FramerMotion/Box";
import { styled } from "@mui/system";

interface VillagerCellProps {
  reversed: boolean;
  isInteractable: boolean;
}

export const VillagerCell = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reversed" && prop !== "isInteractable",
})<VillagerCellProps>((props) => {
  const { theme, reversed, isInteractable } = props;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
    padding: 16,
    border: `6px solid ${theme.palette.primary.main}`,
    borderTopWidth: reversed ? "3px" : "6px",
    borderBottomWidth: reversed ? "6px" : "3px",
    "&:hover": {
      backgroundColor: isInteractable ? theme.palette.neutral.main : undefined,
      cursor: isInteractable ? "grab" : undefined,
    },
  };
});
