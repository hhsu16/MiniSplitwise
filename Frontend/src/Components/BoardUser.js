import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import dummbie2 from "../images/dummbie2.png";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={dummbie2} alt="description logo" style={{}} />
      {/* <h3>{content}</h3> */}
    </div>
  );
};

export default BoardUser;
