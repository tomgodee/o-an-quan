import { VillagerCell as VillagerCellComponent } from "./styles";
import type { Cell } from "../../../../types/types";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Box from "@mui/material/Box";

interface VillagerCellProps {
  reversed?: boolean;
  cell: Cell;
  handleOnClick: (cell: Cell) => void;
}

const VillagerCell = (props: VillagerCellProps) => {
  const { reversed, cell, handleOnClick } = props;

  const getCellValue = (cell: Cell) => {
    return cell.stones.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.value;
    }, 0);
  };

  return (
    <>
      <VillagerCellComponent
        reversed={reversed}
        onClick={() => handleOnClick(cell)}
      >
        {getCellValue(cell)}
        <Box
          position="absolute"
          left={-20}
          top="50%"
          border="1px solid red"
          sx={{
            transform: "translate(0, -50%)",
          }}
        >
          <ArrowCircleLeftOutlinedIcon />
        </Box>
        {/* 
        <ArrowCircleRightOutlinedIcon
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
          }}
        /> */}
      </VillagerCellComponent>
    </>
  );
};

export default VillagerCell;
