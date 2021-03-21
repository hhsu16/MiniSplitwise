import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import dummbie from "../images/dummbie.png";
import dummbie3 from "../images/dummbie3.png";

const Dashboard = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  // const AddExpense = ({ handleClose, show, children }) => {
  //   const showHideClassName = show ? "modal d-block" : "modal d-none";

  //   return (
  //     <div className={showHideClassName}>
  //       <Modal.Dialog>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal title</Modal.Title>
  //         </Modal.Header>

  //         <Modal.Body>
  //           <p>Modal body text goes here.</p>
  //         </Modal.Body>

  //         <Modal.Footer>
  //           <Button variant="secondary">Close</Button>
  //           <Button variant="primary">Save changes</Button>
  //         </Modal.Footer>
  //       </Modal.Dialog>
  //     </div>
  //   );
  // };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          <p style={{ color: "#5bc5a7", fontWeight: "blod" }}>Dashboard</p>
          <br></br>
          <p>
            <Link to={"/GroupPage"}>
              <p style={{ color: "#ccc", fontWeight: "blod" }}>
                Group - add group
              </p>
            </Link>
          </p>
          <br></br>
        </p>
      </div>
      <div>
        <div
          className="nav"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ddd",
              padding: 40,
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
                alert("Add expense");
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
              <span style={{ color: "white", fontWeight: "bold" }}>
                Settle up
              </span>
            </button>
          </div>
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
            <p>
              total balance<br></br>${0}
            </p>
          </div>
          <div
            style={{
              border: "1px solid #b3b3b3",
              background: "#ddd",
              padding: 10,
              width: 200,
            }}
          >
            <p>
              you owe<br></br>${0}
            </p>
          </div>
          <div
            style={{
              border: "1px solid #b3b3b3",
              background: "#ddd",
              padding: 10,
              width: 200,
            }}
          >
            <p>
              you are owed<br></br>${0}
            </p>
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
            <img src={dummbie3} alt="description logo" style={{ width: 600 }} />
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
      <div>
        <img
          src={dummbie}
          alt="description logo"
          style={{ width: 150, height: 200 }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
