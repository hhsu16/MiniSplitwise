import React, { useState, useEffect } from "react";
import bV from "../images/backgroundVideo.mp4";

import "../App.css";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={bV} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
