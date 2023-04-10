import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import DialogActions from "../FramerMotion/DialogActions";
import DialogContent from "../FramerMotion/DialogContent";

interface GuideModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuideModal = (props: GuideModalProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogContent>
        <Typography variant="guideDialogBodyTitle">Objective:</Typography>
        <List>
          <ListItem>
            <Typography variant="guideDialogBodyText">
              The goal of the game is you must gather more stones than your
              opponent.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText>
              A small stone (aka a villager) is worth 1 point while a big stone
              (aka an imperial) is worth 10 points.
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="guideDialogBodyTitle">How to play:</Typography>
        <List>
          <ListItem>
            <ListItemText>
              On each player's turn, he/she can take all stones in one of five
              cells on their side onto their hand and spread them either
              clockwise or counterclockwise.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Consecutively spreading one stone on each cell until there's no
              stone left in the their hand.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Then either one of these will happen:</ListItemText>
          </ListItem>
          <ListItem sx={{ paddingTop: 0 }}>
            <ListItemText>
              <List>
                <ListItem sx={{ paddingTop: 0 }}>
                  <ListItemText>
                    If the next cell is a villager-cell with stones then take
                    and spread all those stones in the current direction.
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ paddingTop: 0 }}>
                  <ListItemText>
                    If the next cell is an empty cell and right after that is a
                    cell with stones then the player wins all stones in that
                    cell. If after the 3rd in line cell is also empty and the
                    4th in line cell has stones, then the player will also win
                    all stones in the 4th in line cell. This will go on until
                    this condition is no longer satisfied and the turn is ended.
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ paddingTop: 0 }}>
                  <ListItemText>
                    If the next cell is an imperial-cell or 2+ empty consecutive
                    cells then the turn is ended.
                  </ListItemText>
                </ListItem>
              </List>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              In case all villager-cells on a side are all empty then the player
              must use 5 stones to seed, 1 stone per cell. If the player doesn't
              have enough stones then the game is ended.
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              The game will end when the two imperial-cells are empty. Upon this
              each player gathers the remaining stones on their side of the
              board. Whoever has more stones is declared the winner.
            </ListItemText>
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Button
          onClick={() => setIsOpen(false)}
          color="primary"
          variant="contained"
          sx={{
            fontWeight: 800,
          }}
        >
          OK, I GOT IT!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GuideModal;
