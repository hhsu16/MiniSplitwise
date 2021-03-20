import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import logo from "./images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import Dashboard from "./components/Dashboard";
import ProfileUpdate from "./components/ProfileUpdate";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav
          className="navbar navbar-expand "
          style={{ backgroundColor: "#1CC29F" }}
        >
          <Link
            to={"/"}
            className="navbar-brand"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            <img
              src={logo}
              style={{
                marginLeft: 100,
                width: 45,
                height: 45,
                marginRight: 10,
                borderWidth: 2,
                borderColor: "white",
              }}
            />
            Splitwise
          </Link>
          <div className="navbar-nav mr-auto">
            {currentUser && (
              <li className="nav-item">
                <Link
                  to={"/dashboard"}
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link
                  to={"/user"}
                  style={{ color: "white", fontWeight: "bold" }}
                  className="nav-link"
                >
                  Activity
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to={"/profile"}
                  style={{ color: "white", fontWeight: "bold", marginTop: 8 }}
                  className="nav-link"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="custom-btn">
                  <a
                    href="/login"
                    className="nav-link"
                    style={{ color: "white", fontWeight: "bold" }}
                    onClick={logOut}
                  >
                    Log out
                  </a>
                </button>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <button type="button" className="btn btn-link">
                  <Link
                    to={"/login"}
                    className="nav-link"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Login
                  </Link>
                </button>
              </li>

              <li className="nav-item">
                <button type="button" className="custom-btn">
                  <Link
                    to={"/register"}
                    className="nav-link"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Sign up
                  </Link>
                </button>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileUpdate" component={ProfileUpdate} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/user" component={BoardUser} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
