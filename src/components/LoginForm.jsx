import React from "react";
import "./LoginForm.modules.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import baseUrl from "../constants/Base";

// component of login
const LoginForm = (props) => {
  const navigate = useNavigate();
  const { text, setText } = useContext(MyContext);
  const { isLogIn, setLogin } = useContext(MyContext);
  const [formValues, setFromValues] = useState({ mail: "", pass_word: "" }); //to store the values from the user
  const [mailError, setMailError] = useState(false);

  const [passError, setPassError] = useState(false);
  const handleChange = (e) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const [msg, setMsg] = useState("");
  let valid = true;
  const handleSubmit = () => {
    if (!(formValues.mail.trim().length > 0)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }

    if (!(formValues.pass_word.trim().length > 0)) {
      setPassError(true);
      valid = false;
    } else {
      setPassError(false);
    }
    if (!valid) {
      setMsg("please fill all the fields correctly");
    }
    if (valid) {
      axios
        .post(`${baseUrl}/api/login`, {
          mail: formValues.mail,

          pass_word: formValues.pass_word,
        })
        .then((response) => {
          setLogin(true);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("token", response.data.token);

          console.log(response.data);

          setText(false);
          navigate("/");
        })
        .catch((er) => {
          alert("Invalid Login");
          console.log(er);
        
        });
    }
  };

  return (
    <div className="formic-container">
      <form>
        <p className="error-msg"> {msg}</p>

        <div className="form-item">
          <span>
            <label>
              {" "}
              <i className="ri-mail-line"></i>{" "}
            </label>
          </span>{" "}
          <input
            type="email"
            onChange={(e) => handleChange(e)}
            className="input"
            name="mail"
            placeholder="Email"
            value={formValues.mail}
            style={{
              borderBottom: mailError ? "2px solid red" : "2px solid #AAAAAA",
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
        {!props.show && (
          <div className="form-item">
            {" "}
            <p className="para">
              {" "}
              Don’t have an account? <Link to="/sign-up"> Sign Up</Link>{" "}
            </p>
          </div>
        )}
        {!props.show && (
          <div className="form-item">
            {" "}
            <div className="form-button">
              {" "}
              <input
                className="btn"
                type="sumbit"
                value="sign in"
                onClick={(e) => {
                  handleSubmit();
                }}
              />
            </div>
          </div>
        )}

        {props.show && (
          <div className="form-item">
            {" "}
            <div className="form-button">
              {" "}
              <input
                className="btnn"
                type="sumbit"
                value="sign in"
                onClick={() => handleSubmit()}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
