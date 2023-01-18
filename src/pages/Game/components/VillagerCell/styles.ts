import Box from "@mui/material/Box";
import { styled } from "@mui/system";

interface VillagerCellProps {
  reversed?: boolean;
}

export const VillagerCell = styled(Box)<VillagerCellProps>((props) => {
  const { reversed, theme } = props;
  return {
    position: "relative",
    padding: 16,
    border: `6px solid ${theme.palette.primary.main}`,
    borderTopWidth: reversed ? "3px" : "6px",
    borderBottomWidth: reversed ? "6px" : "3px",
  };
});

interface ImperialCellProps {
  reversed?: boolean;
}
