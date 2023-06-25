import React from "react";

import "./LoginForm.modules.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import baseUrl from "../constants/Base";
// component of register
const RegisterForm = (props) => {
  const naviagte = useNavigate();
  const { text, setText } = useContext(MyContext);
  const { isLogIn, setLogin } = useContext(MyContext);
  const [formValues, setFromValues] = useState({
    name: "",
    mail: "",
    mobile: "",
    pass_word: "",
  }); //to storethe users values
  const [nameError, setNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (!(formValues.pass_word.trim().length > 0)) {
      setPassError(true);
      valid = false;
    } else {
      setPassError(false);
    }
    if (!(formValues.mail.trim().length > 0)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }
    if (!(formValues.mobile.trim().length > 0)) {
      setMobileError(true);
      valid = false;
    } else {
      setMobileError(false);
    }
    if (!valid) {
      setMsg("please fill the fileds correctly");
    }

    if (valid) {
      axios
        .post(`${baseUrl}/api/register`, {
          name: formValues.name,
          mail: formValues.mail,
          mobile: formValues.mobile,
          pass_word: formValues.pass_word,
        })
        .then((response) => {
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("token", response.data.token);
          setLogin(true);

          console.log(response.data);
          setText(false);
          alert("Registerd Successfully");
          naviagte("/");
        })
        .catch((er) => {
          console.log(er);
        });
    }
  };
  return (
    <div className="formic-container">
      <form>
        <p className="error-msg">{msg} </p>

        <div className="form-item">
          <span>
            <label>
              {" "}
              <i className="ri-user-fill"></i>{" "}
            </label>
          </span>
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            style={{
              borderBottom: nameError ? "2px solid red" : "2px solid #AAAAAA",
            }}
          ></input>
          
        </div>
        <div className="form-item">
          <span>
            <label>
              {" "}
              <i className="ri-mail-line"></i>{" "}
            </label>
          </span>{" "}
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="email"
            name="mail"
            placeholder="Email"
            value={formValues.mail}
            style={{
              borderBottom: mailError ? "2px solid red" : "2px solid #AAAAAA",
            }}
          ></input>
        </div>

        <div className="form-item">
          <span>
            <label>
              {" "}
              <i className="ri-smartphone-line"></i>{" "}
            </label>
          </span>{" "}
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formValues.mobile}
            style={{
              borderBottom: mobileError ? "2px solid red" : "2px solid #AAAAAA",
            }}
          ></input>
        
        </div>
        <div className="form-item">
          <label>
            {" "}
            <i className="ri-lock-fill"></i>{" "}
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className="input"
            type="password"
            name="pass_word"
            placeholder="password"
            value={formValues.pass_word}
            style={{
              borderBottom: passError ? "2px solid red" : "2px solid #AAAAAA",
            }}
          ></input>
         
        </div>

        {props.para && (
          <div className="form-item">
            {" "}
            <p className="para">
              {" "}
              Already have an account? <Link to="/sign-in">Sign In</Link>{" "}
            </p>
          </div>
        )}
        {!props.para && (
          <div className="form-item">
            {" "}
            have an account?{" "}
            <input
              type="button"
              className="login-button"
              onClick={props.onClose}
              value="sign In"
            />
          </div>
        )}

        <div className="form-item">
          {" "}
          <div className="form-button">
            {" "}
            <input
              className="btn"
              type="sumbit"
              value="Sign Up"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
