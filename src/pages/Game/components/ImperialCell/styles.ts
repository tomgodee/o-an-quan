import Box from "../FramerMotion/Box";
import { styled } from "@mui/system";

interface ImperialCellProps {
  reversed?: boolean;
}

export const ImperialCell = styled(Box)<ImperialCellProps>((props) => {
  const { reversed, theme } = props;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: reversed ? "96px 6px 96px 6px" : "96px 6px 96px 6px",
    width: "20%",
    border: `6px solid ${theme.palette.primary.main}`,
    borderTopLeftRadius: reversed ? "50%" : 0,
    borderBottomLeftRadius: reversed ? "50%" : 0,
    borderTopRightRadius: reversed ? 0 : "50%",
    borderBottomRightRadius: reversed ? 0 : "50%",
  };
});
