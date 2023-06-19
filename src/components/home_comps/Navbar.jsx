import React from 'react';
import {useNavigate} from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
    let name;
    const navigate = useNavigate()
    const login = ()=>{
        navigate('/sign-in')
    }
    const register = ()=>{
        navigate('/sign-up')
    }
    const logout = ()=>{
        navigate('/sign-in')
    }
    
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(isLoggedIn){
         name = localStorage.getItem('name')
         console.log(name)
    }
    // console.log(isLoggedIn)
    // console.log(typeof isLoggedIn)
    
    return (
        <div>
            <div className='navbar'>
                 <h4>FEEDBACK</h4> 
                <div className='nav-item'> 
                    <div className='nav-content'>
                        
                            {!isLoggedIn && (
                                <div className="buttons">
                                  <button onClick={ ()=>  login()} className='login'>Login</button>
                                  <button onClick={()=>register()} className='sign-up'>Sign Up</button>
                                </div>
                              )}
                              {isLoggedIn && (
                                
                                 <div className="NVUser">
                                    <h4> { name}</h4>
                                    <button onClick={ ()=>  logout()} className='login'>Logout</button>
                               
                                
                                <img src='' alt="Profile Pic" />
                                 </div>
          )}


                        
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;