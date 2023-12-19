import { styled } from "@mui/material";

const Icon = styled("i")({
  overflow: "visible",
  "::before": {
    display: "block",
  },
});

type FontIconProps = React.ComponentProps<typeof Icon> & {
  icon: string;
  size?: number;
  color?: string;
};

export const FontIcon = (props: FontIconProps) => {
  const { icon, size, color, ...other } = props;

  return (
    <Icon
      {...other}
      className={other.className ? `${icon} ${other.className}` : `${icon}`}
      sx={{
        fontSize: `${size || 16}px !important`,
        color: color,
        ...other.sx,
      }}
    />
  );
};
