import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header>
          <h3>Dashboard</h3>
        </header>
        <button
          style={{
            backgroundColor: "#FF652F",
            borderRadius: 3,
            borderWidth: 0,
            width: 140,
            height: 60,
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>
            Add an expense
          </span>
        </button>
        <button
          style={{
            backgroundColor: "#FF652F",
            borderRadius: 3,
            borderWidth: 0,
            width: 140,
            height: 60,
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>Settle up</span>
        </button>
      </div>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p> */}
    </div>
  );
};

export default Dashboard;
