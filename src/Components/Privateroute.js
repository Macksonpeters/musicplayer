import { Route, Redirect, Navigate } from "react-router-dom";
import auth from "../firebase";

function PrivateRoute({ children }) {
  const currentUser = auth().currentUser;
  return (
    <Route
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
            replace={true}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
