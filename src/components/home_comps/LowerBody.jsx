import React from "react";
import "./LowerBody.modules.css";
import { useState, useEffect } from "react";
import Products_List from "./Products_List";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import baseUrl from "../../constants/Base";

//component that contains the filters, products list etc..

const LowerBody = (props) => {
  const { text, setText } = useContext(MyContext);
  const [categoires, setCategories] = useState([]);
  const [sort, setSort] = useState("upvotes"); // by deafult sorted based on upvote count
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    //to get the categories from DB
    axios
      .get(`${baseUrl}/api/get-categories`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.log("eeror occured"));

    // to get the data based on filter applied by user from DB
    axios
      .get(`${baseUrl}/api/products/?category=${selectedCategory}`)
      .then((resp) => {
        setProducts(resp.data.product);
      })
      .catch((error) => console.log("can't get products error occured"));
  }, [selectedCategory]);

  const Update_sort_type = (sort_type) => {
   

    // to get the data in the sorted form
    axios
      .get(
        `${baseUrl}/api/products/?category=${selectedCategory}&&sort=${sort_type}`
      )
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((err) => {
        console.log(" Error  occured while processing ", err);
      });
  };

  return (
    <div className="lower-body">
      <div className="left-lower-body">
        <div className="head-left-lower-body">
          <p>
            <b>Feed back</b> <br></br> Apply Filters
          </p>
        </div>

        <p className="filter-name">Filters:</p>
        <div className="filters">
          <button
            className={selectedCategory == "All" ? "selected" : "not-selected"}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categoires.map((category, i) => (
            <button
              onClick={() => setSelectedCategory(category)}
              key={i}
              className={
                selectedCategory == category ? "selected" : "not-selected"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="right-lower-body">
        <div className="header-right-lower-body">
          <b>
            <p>10 Suggessions</p>
          </b>

          <div className="header-item">
            Sort by
            <select
              name="sort"
              className="option-sort"
              onChange={(event) => Update_sort_type(event.target.value)}
            >
              <option name="upvote" value="upvotes">
                Upvotes
              </option>
              <option name="comment" value="comments">
                comments
              </option>
            </select>
          </div>
          <div className="header-item">
            <input
              type="button"
              onClick={() => setText(true)}
              value="+ Add products"
            />
          </div>
        </div>
        <div className="products-right-lower-body">
          <div className="product-container">
            {Products.map((prod, i) => (
              <Products_List key={i} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerBody;
