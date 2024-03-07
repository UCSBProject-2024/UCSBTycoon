import React, { useState } from 'react';

interface BuildingProps {
  x: number;
  y: number;
  width: number;
  height: number;
  hasBeenBought?: boolean;
  src: string;
}

const Building: React.FC<BuildingProps> = ({ x, y, width, height, src }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Perform cool animation here
    console.log('Building clicked!');
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: x + '%',
        top: y + '%',
        width: width + '%',
        height: height + '%',
        cursor: 'pointer'
      }}
      onClick={handleClick}>
      {isClicked ? (
        <img src={src} alt="Building" style={{ width: '100%', height: '100%' }} />
      ) : (
        <div style={{ backgroundColor: 'grey', width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default Building;
