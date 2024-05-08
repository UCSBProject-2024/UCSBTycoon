import React, { useState } from 'react';
import './Building.css';
interface BuildingProps {
  x: number;
  y: number;
  width: number;
  height: number;
  hasBeenBought?: boolean;
  src: string;
  imageWidth: number;
  imageHeight: number;
}

const Building: React.FC<BuildingProps> = ({ x, y, width, height, src, imageWidth, imageHeight }) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // if (!isClicked) {
    //   //Set backend to owning building
    //   setIsClicked(true);
    // }
    
    // Perform cool animation here
    console.log('Building clicked!');
  };

  console.log(x * imageWidth, '  ', y * imageHeight);
  return !isClicked ? (
    <a
      className="button"
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: x * imageWidth + 'px',
        top: y * (imageHeight - 140) + 'px',
        width: width * imageWidth + 'px',
        height: height * (imageHeight - 140) + 'px',
        backgroundImage: `url(${src})`
      }}>
      ?
    </a>
  ) : (
    <img
      src={src}
      alt="Building"
      style={{
        position: 'absolute',
        left: x * imageWidth + 'px',
        top: y * (imageHeight - 140) + 'px',
        width: width * imageWidth + 'px',
        height: height * (imageHeight - 140) + 'px',
        cursor: 'pointer',
        border: '1px solid gold',
        borderRadius: '10%'
      }}></img>
  );
};

export default Building;
