import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { response } from 'express';
const AddProduct = () => {
    const [formValues, setFromValues] = useState({name:"",category:"",logo:"", product_link :"", description:""})
    const handleChange = (e)=>{
      setFromValues({...formValues,[e.target.name]:e.target.value})
 }
 const [msg,setMsg] = useState("")

 const [nameError, setNameError] = useState(false)
 const [categoryError, setCategoryError] = useState(false)
 const [logoError, setLogoError] = useState(false)
 const [product_linkError , setProduct_linkError] = useState(false)
 const [descriptionError, setDescriptionError] = useState(false)
 const handleSubmit = ()=>{

     let valid = true;
     if(!(formValues.name.trim().length>0)){
         setNameError(true)
         valid = false;
     }else{
         setNameError(false)
     }
     if(!(formValues.category.trim().length>0)){
         setCategoryError(true)
         valid = false;
     }else{
         setCategoryError(false)
     }
     if(!(formValues.logo.trim().length>0)){
         setLogoError(true)
         valid = false;
     }else{
         setLogoError(false)
     }
     if(!(formValues.product_link.trim().length>0)){
         setProduct_linkError(true)
         valid = false;
     }else{
         setProduct_linkError(false)
     }

     if(!(formValues.description.trim().length>0)){
         setDescriptionError(true)
         valid = false;
     }else{
         setDescriptionError(false)
     }

     if(!valid){
         setMsg("please fill all the fields correctly")
     }
    //  if(valid){
    //     axios.post('http://localhost:4000/api/add-products' , {
    //         name : formValues.name,
    //         category : formValues.category,
    //         logo : formValues.logo,
    //         product_link : formValues.product_link,
    //         description : formValues.description
    //     }).then((response)=>{
    //         console.log(response.data)
    //     }).catch((error)=> console.log(error.data))
    //  }
     
 }
    return (
        <div>
                 <div className='modal-header'>
                    <h4>Add your product</h4>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className='formic-item'>
                            <p className='error-msg'>{msg}</p>
                           
                              <input onChange={(e)=>handleChange(e)} className='input' type="text" name='name'  placeholder="Name" value={formValues.name} style={{borderBottom : nameError ?"2px solid red" : "2px solid #AAAAAA"}} ></input>
                    {/* {nameError?<p className='error'>Please fill correctly</p>:<></>} */}
           
                        </div>

                        <div className='formic-item'>
                              <input onChange={(e)=>handleChange(e)} className='input' type="text" name='category'  placeholder="Category" value={formValues.category} style={{borderBottom : categoryError ?"2px solid red" : "2px solid #AAAAAA"}}  ></input>
                    {/* {categoryError?<p className='error'>Please fill correctly</p>:<></>} */}
           
                        </div>
                        <div className='formic-item'>
                              <input onChange={(e)=>handleChange(e)} className='input' type="text" name='logo'  placeholder="Logo URL" value={formValues.logo} style={{borderBottom : logoError ?"2px solid red" : "2px solid #AAAAAA"}} ></input>
                    {/* {logoError?<p className='error'>Please fill correctly</p>:<></>} */}
           
                        </div>
                        
                        <div className='formic-item'>
                              <input onChange={(e)=>handleChange(e)} className='input' type="text" name='product_link'  placeholder="Product link" value={formValues.product_link} style={{borderBottom : product_linkError ?"2px solid red" : "2px solid #AAAAAA"}} ></input>
                    {/* {product_linkError?<p className='error'>Please fill correctly</p>:<></>} */}
           
                        </div>

                        <div className='formic-item'>
                              <input onChange={(e)=>handleChange(e)} className='input' type="text" name='description'  placeholder="Add description" value={formValues.description}  style={{borderBottom : descriptionError ?"2px solid red" : "2px solid #AAAAAA"}} ></input>
                    {/* {descriptionError?<p className='error'>Please fill correctly</p>:<></>} */}
           
                        </div>



                    </form>

                </div>
               
                <div className='modal-footer'> <input type='submit' className='btn' value='+ Add' onClick={ () =>  handleSubmit() } /> </div>

        </div>
    );
};

export default AddProduct;