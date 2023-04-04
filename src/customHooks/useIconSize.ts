import { useBreakPoints } from "./useBreakPoints";

type IconSize = "4x" | "5x";

export const useIconSize = (): { iconSize: IconSize; iconWidth: number } => {
  const { isScreenSm } = useBreakPoints();
  let iconSize: IconSize = "4x";
  let iconWidth = 80;

  if (isScreenSm) {
    iconSize = "5x";
    iconWidth = 80;
  }

  return { iconSize, iconWidth };
};

export default {
  useIconSize,
};
