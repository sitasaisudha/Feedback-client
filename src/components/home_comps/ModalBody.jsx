import React from 'react';
import './ModalBodyStyles.css'
import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import { useState } from 'react';
import ModalRightPart from './ModalRightPart';
import AddProduct from './AddProduct';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm'

//component that calls the popups eg : register popup, login popup , add product popup 

const ModalBody = (props) => {
    const { text, setText } = useContext(MyContext);
   
    const { isLogIn , setLogin } = useContext(MyContext);
    const [signIn , setSignIn] = useState(false)
    const [para , setPara] = useState(false)
    
    
    if(!text){
        return null;
    }

    return (
        <div>
            <div  className='modal' >
            <div className='modal-content-left'>
                       
                        {(!isLogIn && !signIn) && (
                               
                                <RegisterForm para = {para} onClose = {() => setSignIn(true)}   />
                              )}
                               {
                                (!isLogIn && signIn) &&  (
                                    <LoginForm   />
                                )
                              }
                               {(isLogIn) && (
                                     <AddProduct  />
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