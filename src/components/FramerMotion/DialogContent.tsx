import { motion } from "framer-motion";
import React from "react";

import MuiDialogContent, {
  DialogContentProps,
} from "@mui/material/DialogContent";

const DialogContentComponent = React.forwardRef(
  (props: DialogContentProps, ref) => <MuiDialogContent {...props} ref={ref} />
);

const DialogContent = motion(DialogContentComponent);

export default DialogContent;
