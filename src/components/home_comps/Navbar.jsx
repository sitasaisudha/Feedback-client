import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import image from "./prof.png";
import { useContext } from "react";
import { MyContext } from "../../MyContext";

// navigation component

const Navbar = () => {
  let name;
  const navigate = useNavigate();
  const login = () => {
    navigate("/sign-in");
  };
  const register = () => {
    navigate("/sign-up");
  };
  const logout = () => {
   setLogin(false)
    navigate("/sign-in");
  };

  const { isLogIn, setLogin } = useContext(MyContext);
  if (isLogIn) {
    name = localStorage.getItem("name");
    console.log(name);
  }

  return (
    <div>
      <div className="navbar">
        <h4>FEEDBACK</h4>
        <div className="nav-item">
          <div className="nav-content">
            {!isLogIn && (
              <div className="buttons">
                <button onClick={() => login()} className="login">
                  Login
                </button>
                <button onClick={() => register()} className="sign-up">
                  Sign Up
                </button>
              </div>
            )}
            {isLogIn && (
              <div className="NVUser">
                <button onClick={() => logout()} className="login">
                  Logout
                </button>

                <h4> Hello!</h4>

                <img src={image} alt="Profile Pic" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
