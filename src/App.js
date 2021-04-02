import { Switch, Route } from "react-router-dom";
import CryptocurrencyPage from "./pages/Cryptocurrency";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/cryptocurrency" exact component={CryptocurrencyPage} />
      </Switch>
    </>
  );
};

export default App;
