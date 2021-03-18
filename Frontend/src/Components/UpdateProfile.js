import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import "../App.css";

const UpdateProfile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h1>Input field</h1>

      <button type="button" class="custom-btn">
        <Link
          to={"/dashboard"}
          className="nav-link"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Edit Profile
        </Link>
      </button>
    </div>
  );
};

export default UpdateProfile;
