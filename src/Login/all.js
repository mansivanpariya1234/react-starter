import * as React from "react";
import {
  Route,
  Link,
  useLocation,
  Navigate,
  Routes
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};
const Public = () => <h3>Public page</h3>;
const Protected = () => <h3>Protected page</h3>;

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const { state } = useLocation();

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Navigate to={state?.from || "/"} />;
  }

  return (
    <div>
      <p> please log in page then view protected page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
}

export default function All() {
  return (
 
      <div>
            <Link to="/public">Public Page</Link>
          <br/>
            <Link to="/protected">Protected Page</Link>
          
    <Routes>

        <Route path="/public" element={<Public/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <Protected />
            </PrivateRoute>
          }
        />
      </Routes>
      </div>
  
  );
}
