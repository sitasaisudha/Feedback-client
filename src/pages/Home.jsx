import React, { useState } from 'react';
import AddProduct from '../components/home_comps/AddProduct';
import ModalBody from '../components/home_comps/ModalBody';
import Navbar from '../components/home_comps/Navbar';
import Body from '../components/home_comps/Body';
import image from '../assets/prof.png';
const Home = () => {
    const [show , setShow] = useState(false);
    
    return (
        <div  >
            <Navbar/>
            <Body/>

            <input  type='button' value='show' onClick={()=>setShow(true)} />
            
           
            <ModalBody  onClose ={ ()=> setShow(false)} show = {show}   />
        </div>
    );
};

export default Home;