import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
