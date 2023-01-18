import Box from "@mui/material/Box";
import { styled } from "@mui/system";

interface ImperialCellProps {
  reversed?: boolean;
}

export const ImperialCell = styled(Box)<ImperialCellProps>((props) => {
  const { reversed, theme } = props;
  return {
    padding: reversed ? "96px 6px 96px 24px" : "96px 24px 96px 6px",
    borderRadius: 4,
    width: "20%",
    border: `6px solid ${theme.palette.primary.main}`,
    borderTopLeftRadius: reversed ? "50%" : 4,
    borderBottomLeftRadius: reversed ? "50%" : 4,
    borderTopRightRadius: reversed ? 4 : "50%",
    borderBottomRightRadius: reversed ? 4 : "50%",
  };
});
