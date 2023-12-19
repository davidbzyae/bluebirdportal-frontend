import { Icon, styled } from "@mui/material";

import { JSX } from "react";

type StyledIconProps = {
  size?: number;
};

const StyledIcon = styled(Icon)(({ size }: StyledIconProps) => {
  return {
    "> img": {
      display: "block",
      aspectRatio: "1 / 1",
      height: size,
    },
    overflow: "visible",
    textAlign: "center",
    fontSize: size,
  };
});

interface ImageIconProps extends React.ComponentProps<typeof StyledIcon> {
  src: string;
}

export const ImageIcon = (props: ImageIconProps): JSX.Element => {
  return (
    <StyledIcon {...props} size={props.size || 16}>
      <img src={props.src} />
    </StyledIcon>
  );
};
