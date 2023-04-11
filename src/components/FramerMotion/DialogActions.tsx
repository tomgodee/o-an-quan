import { motion } from "framer-motion";
import React from "react";

import MuiDialogActions, {
  DialogActionsProps,
} from "@mui/material/DialogActions";

const DialogActionsComponent = React.forwardRef(
  (props: DialogActionsProps, ref) => <MuiDialogActions {...props} ref={ref} />
);

const DialogActions = motion(DialogActionsComponent);

export default DialogActions;
