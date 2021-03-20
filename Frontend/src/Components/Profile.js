import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TimezoneSelect from "react-timezone-select";

import "../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const options = ["USD", "KWD", "BHD", "GBP", "EUR", "CAD"];
  const optionsLan = [
    "English",
    "Chinese",
    "Hindi",
    "Spanish",
    "Korea",
    "French",
  ];
  const [selectedTimezone, setSelectedTimezone] = useState("");

  const [previewFile, setPreviewFile] = useState();
  const [currency, setCurrency] = useState(options[0]);
  const [lan, setLan] = useState(optionsLan[0]);

  const [file, setFile] = useState(currentUser.imageData);

  const dispatch = useDispatch();

  const onChangePreviewFile = (e) => {
    let f = e.target.files[0];
    setPreviewFile(URL.createObjectURL(f));
    setFile(f);
  };

  const onChangeCurrency = (e) => {
    let f = e.target;
    setCurrency(f);
  };

  const onChangeLan = (e) => {
    let f = e.target;
    setLan(f);
  };

  const fileUploadHandler = () => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("username", currentUser.username);
    console.log(previewFile);
    axios
      .post("http://localhost:8080/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { user: response.data },
          });
          alert("Image is store in mysql");
        } else {
          alert("status not 200");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <div>
        {previewFile && (
          <div>
            <img className="preview" src={previewFile} alt="" />
          </div>
        )}

        <input type="file" accept="image/*" onChange={onChangePreviewFile} />
        <button onClick={fileUploadHandler}>upload image</button>
      </div>
      <h2>Your account</h2>
      <div>
        <p>
          <strong>Image name (data store on mysql db):</strong>
          {currentUser.imageData}
        </p>
      </div>
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

      <div>
        <p>
          <strong>Your default currency:</strong>{" "}
          <Dropdown
            options={options}
            onChange={onChangeCurrency}
            value={options[0]}
            placeholder="Select an currency option"
          />
        </p>
      </div>

      <div>
        <p>
          <strong>Your default language:</strong>{" "}
          <Dropdown
            options={optionsLan}
            onChange={onChangeLan}
            value={optionsLan[0]}
            placeholder="Select an language option"
          />
        </p>
      </div>

      <strong>Please make a time zone selection</strong>
      <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />

      <button type="button" class="custom-btn">
        <Link
          to={"/profileUpdate"}
          className="nav-link"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Edit Profile
        </Link>
      </button>

      <button
        type="button"
        style={{ backgroundColor: "#1CC29F", borderRadius: 3, borderWidth: 0 }}
      >
        <Link
          to={"/profileUpdate"}
          className="nav-link"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Save Dropdown buttom
        </Link>
      </button>
    </div>
  );
};

export default Profile;
