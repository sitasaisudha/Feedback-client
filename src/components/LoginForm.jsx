import React from 'react';
import './LoginForm.modules.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
const LoginForm = (props) => {
    // const navigate = useNavigate()
    const [formValues, setFromValues] = useState({mail:"" , pass_word : ""})
    const [mailError, setMailError] = useState(false)
  
    const [passError, setPassError] = useState(false)
    const handleChange = (e)=>{
        setFromValues({...formValues,[e.target.name]:e.target.value})
    }
    const [msg,setMsg] = useState("")
    let valid = true;
    const handleSubmit = (e)=>{
        if(!(formValues.mail.trim().length>0)){
            setMailError(true)
            valid = false;
        }else{
            setMailError(false)
        }

        if(!(formValues.pass_word.trim().length>0)){
            setPassError(true)
            valid = false;
        }else{
            setPassError(false)
        }
        if(!valid){
            setMsg("please fill all the fields correctly")
        }
        if(valid)
        {
            axios.post('http://localhost:4000/api/login' , {
           
            mail : formValues.mail,
            
            pass_word : formValues.pass_word
        } ).then((response)=>{
            localStorage.setItem("name", response.data.name )
            localStorage.setItem("token" , response.data.token)
            localStorage.setItem("isLoggedIn" , true)
            
            console.log(response.data)

        }).catch((er)=>{
            console.log(er)
            // navigate('/')
        })
        }
    }


    return (
        <div className='formic-container'>
            <form>
        <p className='error-msg'> { msg}</p>
          
            <div className='form-item'> 
         <span>
         <label>  <i className="ri-mail-line" ></i> </label>
           
            </span>     <input type="email" onChange={(e)=>handleChange(e)} className='input'  name='mail'  placeholder="Email" value={formValues.mail} style={{borderBottom : mailError ?"2px solid red" : "2px solid #AAAAAA"}}  ></input>
                {/* {mailError?<p className='error'>Please fill correctly</p>:<></>} */}
                
            </div>
            <div className='form-item'>
            <label>  <i className="ri-lock-fill"></i> </label>
            <input onChange={(e)=>handleChange(e)} className='input' type="password" name='pass_word'  placeholder="password" value={formValues.pass_word}  style={{borderBottom : passError ?"2px solid red" : "2px solid #AAAAAA"}} ></input>
                {/* {passError?<p className='error'>Please fill correctly</p>:<></>} */}

            </div>
            {(props.show) && (
                                <div className='form-item'> <p className='para'> Don’t have an account?  <Link to='/sign-up'>Sign Up</Link>  </p>
                                </div>
                              )}
            {!(props.show) && (
                                <div className='form-item'> <p className='para'> Don't have an account? <input type='button' className='login-button' onClick={ props.onClose} value="sign UP" /> </p>
                                </div>
                              )}    
           
               
               <div className='form-item'> <div className='form-button' > <input className='btn' type='sumbit' value="sign in" onClick={(e)=> handleSubmit(e)}  />
            </div>
                
                </div>
            </form>
        </div>

    );
};

export default LoginForm;