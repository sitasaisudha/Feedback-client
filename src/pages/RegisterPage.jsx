import React from 'react';
import Banner from '../components/Banner';
import RegisterForm from '../components/RegisterForm';
import './LP.css'

const RegisterPage = () => {
    let para = true;
    return (
        <div className='login-body'>
            <Banner/>
            <RegisterForm para = {para} />
        </div>
    );
};

export default RegisterPage;