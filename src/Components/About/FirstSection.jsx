import React from 'react'
import car1 from "../../assets/we.jpg";

function FirstSection() {
   
  
    return (
      <>
        <div
          className="relative bg-cover h-screen md:h-96 object-cover"
          
          style={{
            backgroundImage: `url(${car1})`,
          }}
        >
          
        </div>
      </>
    );
  }
export default FirstSection
