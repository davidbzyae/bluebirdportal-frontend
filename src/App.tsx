import { AppProvider } from "./providers";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
