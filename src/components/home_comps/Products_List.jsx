import React from "react";
import img from "./Main_image.png";
import "./Products_List.modules.css";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../src/MyContext";
import baseUrl from "../../constants/Base";
import { useState, useEffect } from "react";
import AddProduct from './AddProduct'

//component of a product

const Products_List = ({ product }) => {
    const { edit, setEdit } = useContext(MyContext);
    const { isLogIn , setLogin } = useContext(MyContext);
    const {Id , setId} = useContext(MyContext)
    const [votes, setVotes] = useState(product.upvotes);
    const { text, setText } = useContext(MyContext);
    const [shw, setShw] = useState(false);
   
    const [comment, storeComment] = useState("");

    console.log(product._id)

    return (
        <div className="products-list">
            
                <img src={product.logo} alt="product_image" />
            <div className="right-product">
                <div className="r-uppper">
                    
                    <div>
                        <h3>{product.name}</h3>

                        
                         <p>{product.description}</p>
                        
                         </div>
                    <div className="upvote">
                        <div
                            className="upvote-btn"
                            onClick={() => {
                                setVotes((votes) => votes + 1);
                                axios
                                    .patch(`${baseUrl}/api/upvotes`, {
                                        name: product.name,
                                        upvotes: votes + 1,
                                    })
                                    .then((response) => {
                                        product.upvotes = response.data.upvotes;
                                    });
                            }}
                        >

                            <i className="ri-arrow-drop-up-line"></i> <p>{votes} </p>
                        </div>
                    </div>
                </div>
                <div className="r-lower">
                    <div className="left-box">
                        {product.category.map((category, i) => (
                            <div className="categories">{category}</div>
                        ))}&nbsp;&nbsp;

                        <div className="comment" onClick={() => setShw(true)}>
                            <i className="ri-chat-3-line"></i> comment
                        </div>
                    </div>
                    <div className="right-box">
                        {(isLogIn)&& (
                            <div
                                className="edit"
                                onClick={() => {
                                    console.log(product.id);
                                   setId(product._id)
                                    setEdit(true) ;
                                    setText(true)
                                    
                                }}
                            >

                                Edit
                            </div>
                        )}
                        {product.comments.length}
                        <i className="ri-chat-4-fill"></i>
                    </div>
                    {/* <div></div> */}
                </div>
                {shw ? (
                    <div className="input-box-with-img">
                        <form>
                            <div className="input_box">
                                <input
                                    type="text"
                                    placeholder="Add a comment...."
                                    onChange={(e) => storeComment(e.target.value)}
                                />

                              
                                <button
                                    type="button"
                                    onClick={() =>

                                        axios.patch(`${baseUrl}/api/comments`, {
                                            name: product.name,
                                            comments: comment,
                                        })
                                    }
                                    value=""
                                >

                                    <i className="ri-send-plane-2-line"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    ""
                )}
                <br></br>

                {shw && product.comments ? (
                    <div>
                        {product.comments ? (
                            <div className="scrollable-div">
                                {product.comments.map((eachComment, index) => {
                                    return (
                                        <div className="each-comment-scrollable" key={index}>
                                            <span className="dot"></span>

                                            <p>{eachComment}</p>
                                        </div>
                                    );
                                })}
                                <br></br>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>
          
        </div>
    );
};

export default Products_List;
