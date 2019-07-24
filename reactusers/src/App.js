import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router,Route, NavLink } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Sigin";
import UserList from "./components/UserList";

const App = () => {
  const [isLogged, setLoggedStatus] = useState(false);
  const token = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedStatus(false);
  };

  const handleLogin = token => {
    localStorage.setItem("jwt", token);
    setLoggedStatus(true);
  };

  // When the component first renders
  // Check if the token exists in local storage (if user previously signed in) and update state
  useEffect(() => {
    if (token) {
      setLoggedStatus(true);
    }
  }, [token]);

  return (
    <Router>
    <div className='App'>
      <nav>
        {isLogged ? (
          <div>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signin' onClick={() => handleLogout()}>
              Log out
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to='/signup'>Register</NavLink>
            <NavLink to='/signin'>Log in</NavLink>
          </div>
        )}
      </nav>
      <main>
        <Route
          path='/signup'
          render={props => <Signup {...props} handleLogin={handleLogin} />}
        />
        <Route
          path='/signin'
          render={props => <Signin {...props} handleLogin={handleLogin} />}
        />
        <Route
          path='/users'
          render={props => <UserList {...props} token={token} />}
        />
      </main>
    </div>
    </Router>
  );
};

export default App;


