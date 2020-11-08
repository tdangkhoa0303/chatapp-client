import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

import { Provider } from "./contexts/AuthContext";
import { Socket } from "./contexts/SocketContext";
import { AuthRoute, PrivateRoute } from "./templates";
import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="App" css={{ minHeight: "100vh" }}>
      <Provider>
        <Socket>
          <Router>
            <Global
              styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Happy+Monkey&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap');  

                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }

                html {
                  font-size: 50%;
                  font-family: 'Roboto', sans-serif;
                },
              `}
            />
            <Switch>
              <Route
                exact
                path="/auth"
                component={() => <AuthRoute Component={Auth} />}
              />
              <Route
                path="/"
                component={() => <PrivateRoute Component={Home} />}
              />
            </Switch>
          </Router>
        </Socket>
      </Provider>
    </div>
  );
}

export default App;
