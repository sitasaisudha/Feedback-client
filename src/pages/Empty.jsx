import React, { useState } from 'react';

const Empty = () => {
    const nameError = false;
    const [border , setBorder] = useState("2px solid #AAAAAA")
    const handelSubmit = () =>{
        if(nameError){
            setBorder("2px solid red")
        }
    }
    
    return (
        <div style= {border} >
          a 
          <button onClick={() => handelSubmit()}></button>
        </div>
    );
};

export default Empty;