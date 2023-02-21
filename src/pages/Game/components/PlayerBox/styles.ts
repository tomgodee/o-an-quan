import Box from "../FramerMotion/Box";
import { styled, keyframes } from "@mui/system";
// import { createGlobalStyle } from "emotion";

// interface ImperialCellProps {
//   reversed?: boolean;
// }

export const PlayerBox = styled(Box)((props) => {
  console.log("props", props.theme);
  const rotate = keyframes`
    from {
    }
    to {
    }
  `;
  // const { reversed, theme } = props;
  return {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // position: "relative",
    // padding: reversed ? "96px 6px 96px 24px" : "96px 24px 96px 6px",
    // width: "20%",
    // border: `6px solid ${theme.palette.primary.main}`,
    borderImage:
      "conic-gradient(from 30deg, #d53e33 0deg 90deg, #fbb300 90deg 180deg,#377af5 180deg 270deg,#399953 270deg 360deg) 1 stretch",
    background: "rgba(255, 255, 255, 0.5)",
    // animation: `${rotate} 4s infinite linear`,
  };
});
