import { SxProps } from "@mui/material";

export type MenuOption = {
  icon?: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  persistOnClick?: boolean;
  sx?: SxProps;
};
