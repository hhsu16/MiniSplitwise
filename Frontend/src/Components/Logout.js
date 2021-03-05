import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div>
      <h1>
        Welcome <span className="user_name">{user.username}</span>
        <button className="logout_button" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Logout;
