import React, { useState, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { updateUserProfile } from "../actions/auth";
// import UserService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";

import "../App.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const ProfileUpdate = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const [username, setUsername] = useState(currentUser.username);
  const [newUsername, setNewUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const form = useRef();
  const checkBtn = useRef();

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

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const vphone = (value) => {
    if (value.length != 10) {
      return (
        <div className="alert alert-danger" role="alert">
          The phone number must be 10 characters.
        </div>
      );
    }
  };

  const onChangeNewUsername = (e) => {
    const newUsername = e.target.value;
    setNewUsername(newUsername);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();

    var data = {
      username: currentUser.username,
      newUsername: newUsername,
      email: email,
      phoneNumber: phoneNumber,
    };

    if (checkBtn.current.context._errors.length === 0) {
      axios
        .put("http://localhost:8080/api/user/updateUserProfile", data, {
          headers: authHeader(),
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data));
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: { user: response.data },
            });
            alert("Update");
            props.history.push("/profile");
          } else {
            alert("status not 200");
          }
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} ref={form}>
        <h1>Current User: {currentUser.username}</h1>
        <div>
          <Input
            onChange={onChangeNewUsername}
            type="text"
            class="form-control"
            name="newUsername"
            value={newUsername}
            placeholder="New Username"
            validations={[required, vusername]}
          />
          <Input
            onChange={onChangeEmail}
            type="text"
            class="form-control"
            name="email"
            value={email}
            placeholder="Email"
            validations={[required, validEmail]}
          />
          <Input
            onChange={onChangePhoneNumber}
            type="number"
            class="form-control"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            validations={[vphone]}
          />

          <button
            style={{
              background: "#FF652F",
              borderWidth: 0,
              width: 200,
              height: 42,
              borderRadius: 3,
            }}
          >
            Submit
          </button>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default ProfileUpdate;
