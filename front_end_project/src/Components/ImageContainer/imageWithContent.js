import React from 'react';
import image from '../../Images/image.jpeg'; 
import './imageWithContent.css'; 
import Button from '../Button/button';

const ImageWithContent = () => {
  return (
    <div className="container">
      <img 
        src={image} 
        alt="Responsive" 
        className="image"
      />
      <div className="overlay">
        <div className="content">
            <p>We crush your competitors, goals, and sales records - without the B.S.</p>
            <div className="button_container">
                <Button>Get Free Consultation</Button>
            </div>
            
        </div>
      </div>
      
    </div>
  );
};

export default ImageWithContent;
