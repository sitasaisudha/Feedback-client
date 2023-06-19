import React from 'react';
import img from './Main_image.png'
import './Body.modules.css'
const Body = () => {
    return (
        <div className='box'>
            <div className='left-box'>
                <img src={img} alt="banner image" />
            </div>
            <div className='right-box'>
                <div>

                </div>
                
                <div className='right-box2'>
                <div className='r-box1'>
                    <h4> Add your products and give  your valuable feedback </h4>
                  
                   
                </div>
                <div className='r-box2'>
                <p> Easily give your feedback in a matter of minutes. Access your audience on all platforms. Observe result manually in real time </p>
               
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Body;