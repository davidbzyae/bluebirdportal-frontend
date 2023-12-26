import { Box, styled } from "@mui/material";
import { JSX, useEffect, useState } from "react";

type StyledImageProps = {
  loaded?: boolean;
  src: string;
};

const StyledBoxImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== "loaded" && prop !== "src",
})<StyledImageProps>(({ loaded, src }) => {
  return {
    ...(loaded
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
        }),

    backgroundSize: `cover`,
    backgroundPosition: "center center",
    backgroundImage: `url(${src})`,
    transition: "opacity .3s",
  };
});

interface ImageProps extends React.ComponentProps<typeof StyledBoxImage> {
  src: string;
}

export const ProgressiveBoxImage = ({
  src,
  ...other
}: ImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <StyledBoxImage
      {...other}
      loaded={loaded}
      sx={{ minWidth: other.width, minHeight: other.height, ...other.sx }}
      src={src}
    />
  );
};
