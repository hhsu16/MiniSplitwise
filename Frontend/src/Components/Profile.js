import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      {/* <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p> */}

      <h2>Your account</h2>

      <div>
        <p>
          <strong>Your name</strong> {currentUser.username}
        </p>
      </div>
      <div>
        <p>
          <strong>Your email address: </strong> {currentUser.email}
        </p>
      </div>
      <div>
        <p>
          <strong>Your phone number</strong> {currentUser.phoneNumber}
        </p>
      </div>
      <div>
        <p>
          <strong>Token/password:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
      </div>

      <button type="button" class="custom-btn">
        <Link
          to={"/updateProfile"}
          className="nav-link"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Edit Profile
        </Link>
      </button>
    </div>
  );
};

export default Profile;
