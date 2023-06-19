import React from 'react';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';
// import './LoginPage.module.css'
import './LP.css'

const LoginPage = () => {
    return (
        <div className='login-body'>
            <Banner/>
            <LoginForm/>
            
        </div>
    );
};

export default LoginPage;