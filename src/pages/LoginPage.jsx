import React from 'react';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';
import './LP.css'
// login page
const LoginPage = () => {
    return (
        <div className='login-page'>

       
        <div className='login-body'>
            <Banner/>
            <LoginForm/>
            
        </div>
        </div>
    );
};

export default LoginPage;