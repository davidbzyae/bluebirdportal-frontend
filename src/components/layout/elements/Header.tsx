import { Box, Typography } from "@mui/material";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box>
      <Typography variant="h1" fontSize={32} fontWeight={500}>
        {title}
      </Typography>
    </Box>
  );
};
