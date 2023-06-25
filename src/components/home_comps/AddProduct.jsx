import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ModalBodyStyles.css";
import { useContext } from "react";
import { MyContext } from "../../../src/MyContext";
import baseUrl from "../../constants/Base";

//Component to add a product

const AddProduct = (props) => {
  const [formValues, setFromValues] = useState({
    name: "",
    category: "",
    logo: "",
    product_link: "",
    description: "",
  });

  const { text, setText } = useContext(MyContext);
  const { isLogIn, setLogin } = useContext(MyContext);
  const { edit, setEdit } = useContext(MyContext);
  const { Id, setId } = useContext(MyContext);
  const handleChange = (e) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const [msg, setMsg] = useState("");
  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [product_linkError, setProduct_linkError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const handleSubmit = () => {
    let valid = true;
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (!(formValues.category.trim().length > 0)) {
      setCategoryError(true);
      valid = false;
    } else {
      setCategoryError(false);
    }
    if (!(formValues.logo.trim().length > 0)) {
      setLogoError(true);
      valid = false;
    } else {
      setLogoError(false);
    }
    if (!(formValues.product_link.trim().length > 0)) {
      setProduct_linkError(true);
      valid = false;
    } else {
      setProduct_linkError(false);
    }

    if (!(formValues.description.trim().length > 0)) {
      setDescriptionError(true);
      valid = false;
    } else {
      setDescriptionError(false);
    }

    if (!valid) {
      setMsg("please fill all the fields correctly");
    }
    if (valid) {
      // adding new product to database
      console.log(formValues);

      const headers = { token: localStorage.getItem("token") };

      axios
        .post(
          `${baseUrl}/api/add-products`,
          {
            name: formValues.name,
            category: formValues.category,
            logo: formValues.logo,
            product_link: formValues.product_link,
            description: formValues.description,
          },
          { headers: headers }
        )
        .then((response) => {
          console.log(response.data);
          alert("Added successfully");
        })
        .catch((error) => console.log(error.data));
    }
  };
  const handleEdit = () => {
    // to edit existig product in database

    const headers = { token: localStorage.getItem("token") };
    console.log(headers);
    // editing product in database
    axios
      .patch(
        `${baseUrl}/api/edit-products`,
        {
          id: Id,
          name: formValues.name,
          category: formValues.category,
          logo: formValues.logo,
          product_link: formValues.product_link,
          description: formValues.description,
        },
        { headers: headers }
      )
      .then((resp) => {
        console.log(resp);
        alert("Updated successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="modal-header">
        <h4>Add your product</h4>
      </div>
      <div className="modal-body">
        <form>
          <div className="formic-item">
            <p className="error-msg">{msg}</p>

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

          <div className="formic-item">
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="text"
              name="category"
              placeholder="Category"
              value={formValues.category}
              style={{
                borderBottom: categoryError
                  ? "2px solid red"
                  : "2px solid #AAAAAA",
              }}
            ></input>
          </div>
          <div className="formic-item">
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={formValues.logo}
              style={{
                borderBottom: logoError ? "2px solid red" : "2px solid #AAAAAA",
              }}
            ></input>
          </div>

          <div className="formic-item">
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="text"
              name="product_link"
              placeholder="Product link"
              value={formValues.product_link}
              style={{
                borderBottom: product_linkError
                  ? "2px solid red"
                  : "2px solid #AAAAAA",
              }}
            ></input>
          </div>

          <div className="formic-item">
            <input
              onChange={(e) => handleChange(e)}
              className="input"
              type="text"
              name="description"
              placeholder="Add description"
              value={formValues.description}
              style={{
                borderBottom: descriptionError
                  ? "2px solid red"
                  : "2px solid #AAAAAA",
              }}
            ></input>
          </div>
        </form>
      </div>
      {edit && (
        <div className="modal-footer">
          {" "}
          <input
            type="submit"
            className="btn"
            value="Edit"
            onClick={() => {
              setText(false);
              handleEdit();
            }}
          />{" "}
        </div>
      )}

      {!edit && (
        <div className="modal-footer">
          {" "}
          <input
            type="submit"
            className="btn"
            value="+ Add"
            onClick={() => {
              // {props.onSignClick}
              setText(false);
              handleSubmit();
            }}
          />{" "}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
