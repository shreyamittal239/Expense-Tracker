import React from 'react'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

const navigate = useNavigate();
const handleLogout = async () => {

    await logout();

    navigate("/login");

};
  return (
    <span>
    {user?.name}


    <button onClick={handleLogout}>
    Logout
</button>
      </span>


  )
}

export default Navbar