import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CryptocurrencyPage from "./pages/Cryptocurrency";
import DashboardPage from "./pages/Dashboard";
import Login from "./pages/Login";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

// const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticated === false ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/dashboard" />
//         )
//       }
//     />
//   );
// };

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let user_Token = sessionStorage.getItem("dashobardToken");
    if (user_Token) {
      setAuthenticated(true);
      setLoading(false);
    } else {
      setAuthenticated(false);
      setLoading(false);
    }
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setAuthenticated(true);
    //     setLoading(false);
    //   } else {
    //     setAuthenticated(false);
    //     setLoading(false);
    //   }
    // });
  }, []);

  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          path="/dashboard"
          authenticated={authenticated}
          component={DashboardPage}
        />
        <PrivateRoute
          path="/cryptocurrency"
          authenticated={authenticated}
          component={CryptocurrencyPage}
        />
      </Switch>
    </>
  );
};

export default App;
