import React from 'react';
import Banner from '../components/Banner';
import RegisterForm from '../components/RegisterForm';
import './LP.css'
// register page
const RegisterPage = () => {
    let para = true;
    return (
        <div className='login-page'>
            <div className='login-body'>
            <Banner/>
            <RegisterForm para = {para} />
            </div>
            
        </div>
    );
};

export default RegisterPage;