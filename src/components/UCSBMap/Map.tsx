import React, { useEffect, useState } from 'react';
import './Building';
import Building from './Building';
import { getBuildingData } from '../../hooks/useGameReducer';
interface BuildingProps {
  x: number;
  y: number;
  width: number;
  height: number;
  hasBeenBought?: boolean;
  src: string;
}

const Map: React.FC = () => {
  const MapImg = '/Images/UCSBMap.png';

  // Make building array with useState
  const [buildingArray, setBuildingArray] = useState<BuildingProps[]>([]);

  const [imageWidth, setImageWidth] = useState<number>(window.innerWidth);
  const [imageHeight, setImageHeight] = useState<number>(window.innerWidth);

  useEffect(() => {
    async function fetchData() {
      setBuildingArray(await getBuildingData());
    }
    fetchData();
  }, []);

  //Adjust image size as windowwidth is changed
  useEffect(() => {
    const handleResize = () => {
      setImageWidth(window.innerWidth);
      setImageHeight(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {buildingArray &&
        buildingArray.map((building, index) => (
          <Building
            key={index}
            x={building.x}
            y={building.y}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            width={building.width}
            height={building.height}
            hasBeenBought={building.hasBeenBought}
            src={building.src}
          />
        ))}
      <img
        src={MapImg}
        alt={'UCSBMap'}
        //DO NOT CHANGE 140 WITHOUT TELLING CHRIS
        style={{ width: imageWidth + 'px', height: imageHeight + 'px', paddingBottom: 140 }}
      />
    </>
  );
};

export default Map;
