import React from 'react';
import './ModalBodyStyles.css'


import { useState } from 'react';
import ModalRightPart from './ModalRightPart';
import AddProduct from './AddProduct';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm'
const ModalBody = (props) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const [signIn , setSignIn] = useState(false)
    const [para , setPara] = useState(false)
    let show = false;


 

    if(! props.show){
        return null;
    }
   
  
  
    
    return (
        <div>
            <div  className='modal' >
            <div className='modal-content-left'>
                       
                        {(!isLoggedIn && !signIn) && (
                               
                                <RegisterForm para = {para} onClose = {() => setSignIn(true)}  />
                              )}
                               {
                                (!isLoggedIn && signIn) &&  (
                                    <LoginForm show = {show}  onClose ={() => setSignIn(false)} />
                                )
                              }
                               {isLoggedIn  && (
                                     <AddProduct/>
                              )}
                             

            </div>


            <div className='modal-content-right'> 
            <ModalRightPart/>
            </div>
        </div>
        </div>
    );
};

export default ModalBody;