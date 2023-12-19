import { AppProvider } from "./providers";
import { Typography } from "@mui/material";

function App() {
  return (
    <AppProvider>
      <Typography>Bluebird metrics portal</Typography>
    </AppProvider>
  );
}

export default App;
