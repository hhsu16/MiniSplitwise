import React, { useState, useRef } from "react";
import logo from "../images/logo.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useSelector } from "react-redux";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const GroupPage = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  return (
    <div
      className="col-md-12"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <img style={{ width: 200, height: 200, marginRight: 50 }} src={logo} />
      <div>
        <Form ref={form}>
          <h1 style={{ color: "grey", fontSize: 16, fontWeight: "blod" }}>
            START A NEW GROUP
          </h1>
          {!successful && (
            <div className="form-group">
              <div>
                <label htmlFor="username" style={{ fontSize: 24 }}>
                  My group shall be called…
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div>
                <h1 style={{ color: "grey", fontSize: 12, fontWeight: "blod" }}>
                  GROUP MEMBERS
                </h1>
                <p style={{ color: "grey", fontSize: 6, fontWeight: "blod" }}>
                  Tip: Lots of people to add? Send your friends an invite link.
                </p>
              </div>

              <div>
                <Input style={{ margin: 10 }} placeholder="Username 1" />
                <Input style={{ margin: 10 }} placeholder="Username 2" />
                <Input style={{ margin: 10 }} placeholder="Username 3" />
                <Input style={{ margin: 10 }} placeholder="Username 4" />
              </div>

              <div className="form-group">
                <button
                  style={{
                    background: "#FF652F",
                    borderWidth: 0,
                    width: 200,
                    height: 42,
                    borderRadius: 3,
                  }}
                >
                  <span style={{ color: "white", fontSize: 18 }}>Save</span>
                </button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default GroupPage;
