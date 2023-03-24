import { useEffect, useState } from "react";
import { generateRandomName } from "utils/players";
import { sortStonesByType, calculateStonesValue } from "utils/stone";

import Box from "@mui/material/Box";

import {
  CELL_TYPES,
  DIRECTIONS,
  SCORE_ANIMATION_DURATION_MS,
  STONE_TYPES,
} from "../../constants/constants";
import EndGameModal from "./components/EndGameModal";
import ImperialCell from "./components/ImperialCell";
import PlayerBox from "./components/PlayerBox";
import VillagerCell from "./components/VillagerCell";
import { createImperialStones, createVillagerStones } from "./database";

import type { Cell, DirectionType, Player, Stone } from "../../types/types";

const MINIMUM_RESEEDING_STONES_COUNT = 5;

const Game = () => {
  const [cells, setCells] = useState<Cell[]>([]);
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  const [clickedCell, setClickedCell] = useState<Cell | null>(null);
  const [winningCell, setWinningCell] = useState<Cell>({} as Cell);
  const [lastTouchedCell, setLastTouchedCell] = useState<Cell>({} as Cell);
  const [lastTouchedVillagerCell, setLastTouchedVillagerCell] = useState<Cell>(
    {} as Cell
  );
  const [direction, setDirection] = useState<DirectionType>(DIRECTIONS.LEFT);
  const [playerOne, setPlayerOne] = useState<Player>({
    name: generateRandomName(),
    stones: [],
  });
  const [playerTwo, setPlayerTwo] = useState<Player>({
    name: generateRandomName(),
    stones: [],
  });
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [isSpreadingStones, setIsSpreadingStones] = useState(false);
  const [shouldTriggerNextAction, setShouldTriggerNextAction] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberOfWinningChain, setNumberOfWinningChain] = useState(0);
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);

  const initGame = () => {
    const villagerStones = createVillagerStones();
    const imperialStones = createImperialStones();

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
        stones: [imperialStones[0]],
        leftCellIndex: 6,
        rightCellIndex: 1,
        shouldShowDroppingAnimation: false,
      },
      ...cells,
      {
        id: 11,
        type: CELL_TYPES.IMPERIAL,
        stones: [imperialStones[1]],
        leftCellIndex: 5,
        rightCellIndex: 10,
        shouldShowDroppingAnimation: false,
      },
    ]);

    setPlayerOne({ ...playerOne, stones: [] });
    setPlayerTwo({ ...playerTwo, stones: [] });
    setIsEndGameModalOpen(false);
  };

  const checkIfCellsHaveStones = () => {
    const checkedCells = isPlayerOneTurn
      ? cells.slice(6, 11)
      : cells.slice(1, 6);
    return checkedCells.some((cell) => cell.stones.length > 0);
  };

  const reseedStones = (seedingStones: Stone[]) => {
    setCells((cells) => {
      return cells.map((cell) => {
        if (
          (isPlayerOneTurn && cell.id >= 6 && cell.id <= 10) ||
          (!isPlayerOneTurn && cell.id >= 1 && cell.id <= 5)
        ) {
          const stone = seedingStones.shift();
          cell.stones.push(stone as Stone);
        }
        return cell;
      });
    });

    if (isPlayerOneTurn) {
      setPlayerOne((player) => ({
        ...player,
        stones: player.stones.slice(5),
      }));
    } else {
      setPlayerTwo((player) => ({
        ...player,
        stones: player.stones.slice(5),
      }));
    }
  };

  const endTurn = () => {
    setIsPlayerOneTurn((prevState) => !prevState);
    setIsSpreadingStones(false);
    setShouldTriggerNextAction(false);
    setSelectedCell(null);
    setLastTouchedCell({} as Cell);
    setLastTouchedVillagerCell({} as Cell);
    setNumberOfWinningChain(0);
    setCells((cells) =>
      cells.map((cell) => {
        cell.shouldShowDroppingAnimation = false;
        return cell;
      })
    );
  };

  const endGame = () => {
    setIsGameStarted(false);
    const isPlayerOne = true;

    const playerOneNonEmptyCells = cells
      .slice(6, 11)
      .filter((cell) => cell.stones.length > 0);

    const playerTwoNonEmptyCells = cells
      .slice(1, 6)
      .filter((cell) => cell.stones.length > 0);

    retriveStones(isPlayerOne, playerOneNonEmptyCells);
    setTimeout(() => {
      retriveStones(!isPlayerOne, playerTwoNonEmptyCells);
    }, SCORE_ANIMATION_DURATION_MS * playerOneNonEmptyCells.length);

    setTimeout(() => {
      console.log(playerOne);
      console.log(playerTwo);
      setIsEndGameModalOpen(true);
    }, SCORE_ANIMATION_DURATION_MS * (playerOneNonEmptyCells.length + playerTwoNonEmptyCells.length) + 1000);
  };

  const retriveStones = (isPlayerOne: boolean, nonEmptyCells: Cell[]) => {
    for (let i = 0; i < nonEmptyCells.length; i += 1) {
      setTimeout(() => {
        const retrivedCell = nonEmptyCells[i];
        let retrivedStones: Stone[] = [];
        setCells((cells) => {
          return cells.map((cell) => {
            if (cell.id === retrivedCell.id) {
              retrivedStones = [...cell.stones];
              cell.stones = [];
            }
            return cell;
          });
        });
        updatePlayerStones(isPlayerOne, retrivedStones);
      }, (i + 1) * SCORE_ANIMATION_DURATION_MS);
    }
  };

  const updatePlayerStones = (isPlayerOne: boolean, stones: Stone[]) => {
    if (isPlayerOne) {
      setPlayerOne((player) => ({
        ...player,
        stones: player.stones.concat(stones).sort(sortStonesByType),
      }));
    } else {
      setPlayerTwo((player) => ({
        ...player,
        stones: player.stones.concat(stones).sort(sortStonesByType),
      }));
    }
  };

  const spreadStones = (cell: Cell, direction: DirectionType) => {
    setIsGameStarted(true);
    setIsSpreadingStones(true);
    setSelectedCell(cell);
    setDirection(direction);

    let currentCell = { ...cell };
    const spreadingStones = [...currentCell.stones];
    let { leftCellIndex, rightCellIndex } = currentCell;

    setShouldTriggerNextAction(false);
    setCells((cells) =>
      cells.map((cell) => {
        if (cell.id === currentCell.id) {
          cell.stones = [];
        }
        return cell;
      })
    );

    const numberOfLoops = spreadingStones.length;
    for (let i = 0; i < numberOfLoops; i += 1) {
      setTimeout(() => {
        const isLastLoop = i === numberOfLoops - 1;
        // if it's the last stone then save the last touched villager cell b4 changing the current cell
        if (isLastLoop && currentCell.type === CELL_TYPES.VILLAGER) {
          setLastTouchedVillagerCell(currentCell);
        }

        setCells((cells) => {
          let currentCells = cells.map((cell) => {
            cell.shouldShowDroppingAnimation = false;
            return cell;
          });
          const spreadingStone = spreadingStones.shift();

          if (direction === DIRECTIONS.LEFT) {
            currentCells[leftCellIndex].stones.push(spreadingStone as Stone);
            currentCells[leftCellIndex].shouldShowDroppingAnimation = true;
            if (leftCellIndex === 0) {
              direction = DIRECTIONS.RIGHT;
              rightCellIndex = currentCell.id === 1 ? 6 : 1;
              currentCell = currentCells[leftCellIndex];
            } else {
              currentCell = currentCells[leftCellIndex];
              leftCellIndex = currentCell.leftCellIndex;
            }
          } else if (direction === DIRECTIONS.RIGHT) {
            currentCells[rightCellIndex].stones.push(spreadingStone as Stone);
            currentCells[rightCellIndex].shouldShowDroppingAnimation = true;
            if (rightCellIndex === 11) {
              direction = DIRECTIONS.LEFT;
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

          if (isLastLoop) {
            setShouldTriggerNextAction(true);
          }

          return currentCells;
        });
      }, (i + 1) * 200);
    }
  };

  const collectWinningStones = (
    emptyCell: Cell,
    lastTouchedVillagerCell: Cell
  ) => {
    let winningCell =
      emptyCell.type === CELL_TYPES.VILLAGER
        ? getNextCellOnMiddleTable(emptyCell)
        : getNextCellOnEdgeTable(lastTouchedVillagerCell);

    setWinningCell(winningCell);
    if (winningCell.type === CELL_TYPES.IMPERIAL) {
      setDirection((prevDirection) =>
        prevDirection === DIRECTIONS.LEFT ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT
      );
    }

    if (winningCell.stones.length > 0) {
      // collect winning stones
      setCells((cells) => {
        const newCells = cells.map((cell) => {
          if (cell.id === winningCell.id) {
            const winningStones = [...cell.stones];
            if (isPlayerOneTurn) {
              setPlayerOne((player) => ({
                ...player,
                stones: player.stones
                  .concat(winningStones)
                  .sort(sortStonesByType),
              }));
            } else {
              setPlayerTwo((player) => ({
                ...player,
                stones: player.stones
                  .concat(winningStones)
                  .sort(sortStonesByType),
              }));
            }
            cell.stones = [];
          }
          cell.shouldShowDroppingAnimation = false;
          return cell;
        });
        return newCells;
      });

      setNumberOfWinningChain((prevState) => prevState + 1);
    } else {
      endTurn();
    }
  };

  const getNextCellOnMiddleTable = (cell: Cell) => {
    return direction === DIRECTIONS.LEFT
      ? cells[cell.leftCellIndex]
      : cells[cell.rightCellIndex];
  };

  const getNextCellOnEdgeTable = (lastTouchedVillagerCell: Cell) => {
    let nextCellId = 0;
    if (lastTouchedVillagerCell) {
      if (lastTouchedVillagerCell.id === 1) nextCellId = 6;
      else if (lastTouchedVillagerCell.id === 5) nextCellId = 10;
      else if (lastTouchedVillagerCell.id === 6) nextCellId = 1;
      else if (lastTouchedVillagerCell.id === 10) nextCellId = 5;
    }
    return cells[nextCellId];
  };

  const findNextCell = () => {
    let nextCell;
    if (lastTouchedCell) {
      if (lastTouchedCell.type === CELL_TYPES.IMPERIAL) {
        nextCell = getNextCellOnEdgeTable(lastTouchedVillagerCell as Cell);
      } else if (lastTouchedCell.type === CELL_TYPES.VILLAGER) {
        nextCell = getNextCellOnMiddleTable(lastTouchedCell);
      }
    }

    return nextCell;
  };

  const findNextCellWhenCollecting = (
    lastTouchedCell: Cell,
    lastTouchedVillagerCell: Cell
  ): Cell => {
    let nextCell = {} as Cell;
    if (lastTouchedCell.type === CELL_TYPES.IMPERIAL) {
      if (lastTouchedVillagerCell.id === 2) nextCell = cells[6];
      else if (lastTouchedVillagerCell.id === 4) nextCell = cells[10];
      else if (lastTouchedVillagerCell.id === 7) nextCell = cells[1];
      else if (lastTouchedVillagerCell.id === 9) nextCell = cells[5];
    } else {
      nextCell = getNextCellOnMiddleTable(lastTouchedCell);
    }

    return nextCell;
  };

  const processNextAction = () => {
    let nextCell = findNextCell();

    if (nextCell) {
      // If there's still any stone in the next cell then spread its stones
      if (nextCell.stones.length > 0) {
        if (nextCell.type === CELL_TYPES.VILLAGER) {
          spreadStones(nextCell, direction);
        } else {
          endTurn();
        }
      } else {
        // else the player collect stones
        collectWinningStones(nextCell, lastTouchedVillagerCell as Cell);
      }
    }
  };

  const areImperialCellsEmpty = () => {
    return [cells[0], cells[11]].every((cell) => cell.stones.length === 0);
  };

  const getWinner = () => {
    const playerOneScore = calculateStonesValue(playerOne.stones);
    const playerTwoScore = calculateStonesValue(playerTwo.stones);

    return playerOneScore > playerTwoScore ? playerOne : playerTwo;
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    const doCellsHaveStones = checkIfCellsHaveStones();
    if (isGameStarted) {
      const currentPlayer = isPlayerOneTurn ? playerOne : playerTwo;
      const playerVillagerStones = currentPlayer.stones.filter(
        (stone) => stone.type === STONE_TYPES.VILLAGER
      );

      if (
        (!doCellsHaveStones &&
          playerVillagerStones.length < MINIMUM_RESEEDING_STONES_COUNT) ||
        areImperialCellsEmpty()
      ) {
        endGame();
      } else if (
        !doCellsHaveStones &&
        playerVillagerStones.length >= MINIMUM_RESEEDING_STONES_COUNT
      ) {
        reseedStones(playerVillagerStones.slice(0, 5));
      }
    }
  }, [isPlayerOneTurn]);

  useEffect(() => {
    if (shouldTriggerNextAction) {
      processNextAction();
    }
  }, [shouldTriggerNextAction]);

  useEffect(() => {
    if (numberOfWinningChain && winningCell && lastTouchedVillagerCell) {
      const thirdInLineCell = findNextCellWhenCollecting(
        winningCell,
        lastTouchedVillagerCell
      );

      if (winningCell.type === CELL_TYPES.VILLAGER) {
        setLastTouchedVillagerCell(winningCell);
      }

      console.log("thirdInLineCell", thirdInLineCell);
      if (thirdInLineCell.stones.length > 0) {
        endTurn();
      } else {
        collectWinningStones(thirdInLineCell, lastTouchedVillagerCell);
      }
    }
  }, [numberOfWinningChain]);

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
        <PlayerBox
          player={playerTwo}
          enabled={!isPlayerOneTurn}
          isPlayerOne={false}
        />
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
                handleClickDirectionButton={spreadStones}
                isSelected={selectedCell?.id === cell.id}
                isInteractable={
                  ((isPlayerOneTurn &&
                    cell.id > 5 &&
                    cell.id <= 10 &&
                    cell.stones.length > 0) ||
                    (!isPlayerOneTurn &&
                      cell.id <= 5 &&
                      cell.stones.length > 0)) &&
                  !isSpreadingStones
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
        <PlayerBox player={playerOne} enabled={isPlayerOneTurn} isPlayerOne />
      </Box>

      <EndGameModal
        open={isEndGameModalOpen}
        player={getWinner()}
        initGame={initGame}
      />
    </Box>
  );
};

export default Game;
