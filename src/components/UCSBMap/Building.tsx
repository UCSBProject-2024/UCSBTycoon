import React, { useState } from 'react';

interface BuildingProps {
  x: number;
  y: number;
  width: number;
  height: number;
  hasBeenBought?: boolean;
}

const Building: React.FC<BuildingProps> = ({ x, y, width, height }) => {
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
        backgroundColor: isClicked ? 'blue' : 'red',
        cursor: 'pointer'
      }}
      onClick={handleClick}>
      {/* Replace with your building image */}
    </div>
  );
};

export default Building;
