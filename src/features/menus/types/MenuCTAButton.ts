import { ButtonProps, SxProps } from "@mui/material";

export type MenuCTAButton = {
  icon?: string;
  color?: string;
  variant?: ButtonProps["variant"];
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  persistOnClick?: boolean;
  sx?: SxProps;
};
