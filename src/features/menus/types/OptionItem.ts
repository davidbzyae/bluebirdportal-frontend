import { SxProps } from "@mui/material";

export type OptionItem = {
  icon?: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  persistOnClick?: boolean;
  sx?: SxProps;
};
