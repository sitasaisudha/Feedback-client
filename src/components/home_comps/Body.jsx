import React from 'react';
import img from './Main_image.png'
import './Body.modules.css'
import { useContext } from 'react';
import { MyContext } from '../../MyContext';

//image and heading component
const Body = () => {
    const { text, setText } = useContext(MyContext);
    return (
        <div className='box'>
         
                <img src={img} alt="banner image" />
           
            <div className='right-box'>
                
                
             
         
                    <b>Add your products and give <br /> your valuable feedback</b> <br /> <p> Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time </p>
                
                  
                   
               
               
                
            </div>
        </div>
    );
};

export default Body;