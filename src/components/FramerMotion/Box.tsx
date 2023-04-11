import { motion } from "framer-motion";
import React from "react";

import MuiBox, { BoxProps } from "@mui/material/Box";

const BoxComponent = React.forwardRef((props: BoxProps, ref) => (
  <MuiBox {...props} ref={ref} />
));

const Box = motion(BoxComponent);

export default Box;
