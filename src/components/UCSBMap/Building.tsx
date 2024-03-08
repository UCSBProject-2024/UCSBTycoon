import React, { useState } from 'react';

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
    setIsClicked(true);
    // Perform cool animation here
    console.log('Building clicked!');
  };

  console.log(x * imageWidth, '  ', y * imageHeight);

  return (
    <div
      style={{
        position: 'absolute',
        left: x * imageWidth + 'px',
        top: y * (imageHeight - 140) + 'px',
        width: width * imageWidth + 'px',
        //DO NOT CHANGE 140 WITHOUT TELLING CHRIS
        height: height * (imageHeight - 140) + 'px',
        cursor: 'pointer'
      }}
      onClick={handleClick}>
      {isClicked ? (
        <img src={src} alt="Building" />
      ) : (
        <div style={{ backgroundColor: 'grey', width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default Building;
