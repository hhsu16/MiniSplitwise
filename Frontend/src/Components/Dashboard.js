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
          marginBottom: 20,
        }}
      >
        <header>
          <h3 style={{ marginRight: 100 }}>Dashboard</h3>
        </header>
        <button
          style={{
            backgroundColor: "#FF652F",
            borderRadius: 3,
            borderWidth: 0,
            width: 140,
            height: 60,
            marginRight: 10,
          }}
          onClick={() => {
            alert("add expense");
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>
            Add an expense
          </span>
        </button>
        <button
          style={{
            backgroundColor: "#1CC29F ",
            borderRadius: 3,
            borderWidth: 0,
            width: 140,
            height: 60,
          }}
          onClick={() => {
            alert("settle up");
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>Settle up</span>
        </button>
      </div>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #b3b3b3",
            background: "#ddd",
            padding: 10,
            width: 200,
          }}
        >
          <p>total balance</p>
        </div>
        <div
          style={{
            border: "1px solid #b3b3b3",
            background: "#ddd",
            padding: 10,
            width: 200,
          }}
        >
          <p>you owe</p>
        </div>
        <div
          style={{
            border: "1px solid #b3b3b3",
            background: "#ddd",
            padding: 10,
            width: 200,
          }}
        >
          <p>you are owed</p>
        </div>
      </div>

      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          1<br />2<br />3
        </div>
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
