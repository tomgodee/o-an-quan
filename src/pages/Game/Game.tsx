import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import {
  CELL_TYPES,
  DIRECTIONS,
  STONE_TYPES,
  STONE_VALUES,
} from "../../constants/constants";
import ImperialCell from "./components/ImperialCell";
import PlayerBox from "./components/PlayerBox";
import VillagerCell from "./components/VillagerCell";

import type { Cell, Stone, DirectionType, Player } from "../../types/types";

const imperialStone: Stone = {
  id: 0,
  type: STONE_TYPES.IMPERIAL,
  value: STONE_VALUES.IMPERIAL,
  top: 0,
  left: 0,
  rotate: 0,
};

const Game = () => {
  const [cells, setCells] = useState<Cell[]>([]);
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [clickedCell, setClickedCell] = useState<Cell | null>(null);
  const [lastTouchedCell, setLastTouchedCell] = useState<Cell | null>(
    {} as Cell
  );
  const [lastTouchedVillagerCell, setLastTouchedVillagerCell] =
    useState<Cell | null>({} as Cell);
  const [direction, setDirection] = useState<DirectionType>(DIRECTIONS.left);
  const [playerOne, setPlayerOne] = useState<Player>({
    stones: [],
  });
  const [playerTwo, setPlayerTwo] = useState<Player>({
    stones: [],
  });
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [isGameRunning, setIsGameRunning] = useState(false);

  const endTurn = () => {
    setIsPlayerOneTurn((prevState) => !prevState);
    setIsGameRunning(false);
    setSelectedCell(null);
    setLastTouchedCell(null);
    setLastTouchedVillagerCell(null);
    setCells((cells) =>
      cells.map((cell) => {
        cell.shouldShowDroppingAnimation = false;
        return cell;
      })
    );
  };

  const handleClickDirectionButton = (cell: Cell, direction: DirectionType) => {
    setIsGameRunning(true);
    setSelectedCell(cell);
    setDirection(direction);
    // setCells((cells) => {

    // })

    let currentCell = { ...cell };
    const initialCellIndex = currentCell.id;
    const spreadingStones = [...currentCell.stones];
    let { leftCellIndex, rightCellIndex } = currentCell;

    for (let i = 0; i < spreadingStones.length; i += 1) {
      setTimeout(() => {
        // if it's the last stone then save the last touched villager cell b4 changing the current cell
        if (
          i === spreadingStones.length - 1 &&
          currentCell.type === CELL_TYPES.VILLAGER
        ) {
          setLastTouchedVillagerCell(currentCell);
        }

        setCells((cells) => {
          let currentCells = cells.map((cell) => {
            cell.shouldShowDroppingAnimation = false;
            return cell;
          });
          const spreadingStone = currentCells[initialCellIndex].stones.shift();

          if (direction === DIRECTIONS.left) {
            currentCells[leftCellIndex].stones.push(spreadingStone as Stone);
            currentCells[leftCellIndex].shouldShowDroppingAnimation = true;
            if (leftCellIndex === 0) {
              direction = DIRECTIONS.right;
              rightCellIndex = currentCell.id === 1 ? 6 : 1;
              currentCell = currentCells[leftCellIndex];
            } else {
              currentCell = currentCells[leftCellIndex];
              leftCellIndex = currentCell.leftCellIndex;
            }
          } else if (direction === DIRECTIONS.right) {
            currentCells[rightCellIndex].stones.push(spreadingStone as Stone);
            currentCells[rightCellIndex].shouldShowDroppingAnimation = true;
            if (rightCellIndex === 11) {
              direction = DIRECTIONS.left;
              leftCellIndex = currentCell.id === 5 ? 10 : 5;
              currentCell = currentCells[rightCellIndex];
            } else {
              currentCell = currentCells[rightCellIndex];
              rightCellIndex = currentCell.rightCellIndex;
            }
          }

          setDirection(direction);

          setLastTouchedCell(currentCell);
          if (currentCell.type === CELL_TYPES.VILLAGER) {
            setLastTouchedVillagerCell(currentCell);
          }

          return currentCells;
        });
      }, (i + 1) * 1000);
    }
  };

  const initGame = () => {
    const villagerStones: Stone[] = [];
    for (let i = 1; i <= 50; i += 1) {
      villagerStones.push({
        id: i,
        type: STONE_TYPES.VILLAGER,
        value: STONE_VALUES.VILLAGER,
        top: Math.floor(Math.random() * 65),
        left: Math.floor(Math.random() * 75),
        rotate: Math.floor(Math.random() * 360),
      });
    }

    const cells = [];
    for (let i = 1; i <= 10; i += 1) {
      cells.push({
        id: i,
        type: CELL_TYPES.VILLAGER,
        stones: villagerStones.slice(5 * (i - 1), 5 * i),
        leftCellIndex: i !== 6 ? i - 1 : 0,
        rightCellIndex: i !== 5 ? i + 1 : 11,
        shouldShowDroppingAnimation: false,
      });
    }

    setCells([
      {
        id: 0,
        type: CELL_TYPES.IMPERIAL,
        stones: [{ ...imperialStone, id: 0 }],
        leftCellIndex: 6,
        rightCellIndex: 1,
        shouldShowDroppingAnimation: false,
      },
      ...cells,
      {
        id: 11,
        type: CELL_TYPES.IMPERIAL,
        stones: [{ ...imperialStone, id: 11 }],
        leftCellIndex: 5,
        rightCellIndex: 10,
        shouldShowDroppingAnimation: false,
      },
    ]);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (selectedCell?.stones.length === 0) {
      let nextCell;
      let secondInLineCell: Cell;

      // Find the next cell after spread all the stones
      if (lastTouchedCell) {
        if (direction === DIRECTIONS.left) {
          if (lastTouchedCell.type === CELL_TYPES.IMPERIAL) {
            let nextCellId = 0;
            if (lastTouchedVillagerCell) {
              if (lastTouchedVillagerCell.id === 1) nextCellId = 6;
              else if (lastTouchedVillagerCell.id === 6) nextCellId = 1;
              else if (lastTouchedVillagerCell.id === 5) nextCellId = 10;
              else if (lastTouchedVillagerCell.id === 10) nextCellId = 5;
            }
            nextCell = cells[nextCellId];
          } else {
            nextCell = cells[lastTouchedCell.leftCellIndex];
          }
        } else {
          if (lastTouchedCell.type === CELL_TYPES.IMPERIAL) {
            let nextCellId = 0;
            if (lastTouchedVillagerCell) {
              if (lastTouchedVillagerCell.id === 1) nextCellId = 6;
              else if (lastTouchedVillagerCell.id === 6) nextCellId = 1;
              else if (lastTouchedVillagerCell.id === 5) nextCellId = 10;
              else if (lastTouchedVillagerCell.id === 10) nextCellId = 5;
            }
            nextCell = cells[nextCellId];
          } else {
            nextCell = cells[lastTouchedCell.rightCellIndex];
          }
        }
      }

      // If there's still stone in the next cell
      // console.log("nextCell", nextCell);
      if (nextCell) {
        if (nextCell.stones.length) {
          if (nextCell.type === CELL_TYPES.VILLAGER) {
            handleClickDirectionButton(nextCell, direction);
          } else {
            endTurn();
          }
        } else {
          // else calculate stones a player wins
          if (direction === DIRECTIONS.left) {
            secondInLineCell = cells[nextCell.leftCellIndex];
          } else {
            secondInLineCell = cells[nextCell.rightCellIndex];
          }

          setCells((cells) => {
            const newCells = cells.map((cell) => {
              if (cell.id === secondInLineCell.id) {
                const winningStones = [...cell.stones];
                if (isPlayerOneTurn) {
                  setPlayerOne((player) => ({
                    ...player,
                    stones: player.stones.concat(winningStones),
                  }));
                } else {
                  setPlayerTwo((player) => ({
                    ...player,
                    stones: player.stones.concat(winningStones),
                  }));
                }
                cell.stones = [];
              }
              cell.shouldShowDroppingAnimation = false;
              return cell;
            });
            return newCells;
          });

          endTurn();
        }
      }
    }
  }, [cells]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="space-around"
      height="100vh"
    >
      <Box width="20%">
        <PlayerBox player={playerTwo} enabled={!isPlayerOneTurn} />
      </Box>

      <Box display="flex" width="100%">
        {cells.length > 11 && <ImperialCell cell={cells[0]} reversed />}
        <Box display="grid" width="60%" gridTemplateColumns="repeat(5, 20%)">
          {cells.slice(1, 11).map((cell) => {
            return (
              <VillagerCell
                key={cell.id}
                cell={cell}
                reversed={cell.id > 5}
                direction={direction}
                handleClickDirectionButton={handleClickDirectionButton}
                isSelected={selectedCell?.id === cell.id}
                isInteractable={
                  ((isPlayerOneTurn && cell.id > 5 && cell.id <= 10) ||
                    (!isPlayerOneTurn && cell.id <= 5)) &&
                  !isGameRunning
                }
                isClicked={clickedCell?.id === cell.id}
                setClickedCell={setClickedCell}
              />
            );
          })}
        </Box>
        {cells.length > 11 && <ImperialCell cell={cells[11]} />}
      </Box>

      <Box width="20%">
        <PlayerBox player={playerOne} enabled={isPlayerOneTurn} />
      </Box>
    </Box>
  );
};

export default Game;
