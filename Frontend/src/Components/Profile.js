import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TimezoneSelect from "react-timezone-select";
import authHeader from "../services/auth-header";

import "../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Profile = (props) => {
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
  const [loading, setLoading] = useState(false);

  const [previewFile, setPreviewFile] = useState();
  const [currency, setCurrency] = useState(options[0]);
  const [lan, setLan] = useState(optionsLan[0]);

  const [file, setFile] = useState(currentUser.imageData);
  const defaultOption = options[0];
  const defaultOptionLan = optionsLan[0];

  const dispatch = useDispatch();

  const onChangePreviewFile = (e) => {
    let f = e.target.files[0];
    setPreviewFile(URL.createObjectURL(f));
    setFile(f);
  };

  // const onChangeCurrency = (e) => {
  //   let f = e.target;
  //   setCurrency(f);
  // };

  // const onChangeLan = (e) => {
  //   let f = e.target;
  //   setLan(f);
  // };

  // const onChangeSelectedTimezone = (e) => {
  //   let tz = e.target;
  //   setSelectedTimezone(tz);
  // };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let formData = new FormData();

    var data = {
      username: currentUser.username,
      currencyType: currency.value,
      languageType: lan.value,
      timezoneType: JSON.stringify(selectedTimezone, null, 2),
    };
    for (let i in data) {
      formData.append(i, data[i]);
    }

    axios
      .post("http://localhost:8080/updateDropdown", formData, {
        headers: authHeader(),
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { user: response.data },
          });
          alert("All drop down is updated in db");
          props.history.push("/profile");
        } else {
          alert("status not 200");
        }
      })
      .catch(() => {
        setLoading(false);
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
          <strong>My current currency type: </strong> {currentUser.currencyType}
          <strong>{"\n"}Your default currency:</strong>{" "}
          <Dropdown
            options={options}
            onChange={setCurrency}
            value={defaultOption}
            placeholder="Select an currency option"
          />
        </p>
      </div>
      <div>
        <p>
          <strong>My default language:</strong> {currentUser.languageType}
          <strong>{"\n"}Your default language:</strong>{" "}
          <Dropdown
            options={optionsLan}
            onChange={setLan}
            value={defaultOptionLan}
            placeholder="Select an language option"
          />
        </p>
      </div>
      <strong>My default language:</strong> {currentUser.timezoneType}
      <strong>{"\n"}Please make a time zone selection</strong>
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
        onClick={handleSubmit}
      >
        Save Dropdown Options
      </button>
    </div>
  );
};

export default Profile;
