import React, { useEffect, useState } from 'react';
import './Building';
import Building from './Building';

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

  // Fill building array with building components made with Data.json\
  useEffect(() => {
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => {
        const newBuildings: BuildingProps[] = [];
        for (let i = 0; i < data.KnowledgeBuildings?.MultiplierBuildings?.length; i++) {
          newBuildings.push(data.KnowledgeBuildings.MultiplierBuildings[i]);
        }
        for (let i = 0; i < data.KnowledgeBuildings?.IncomeBuildings?.length; i++) {
          newBuildings.push(data.KnowledgeBuildings.IncomeBuildings[i]);
        }
        for (let i = 0; i < data.MoneyBuildings?.MultiplierBuildings?.length; i++) {
          newBuildings.push(data.MoneyBuildings.MultiplierBuildings[i]);
        }
        for (let i = 0; i < data.MoneyBuildings?.IncomeBuildings?.length; i++) {
          newBuildings.push(data.MoneyBuildings.IncomeBuildings[i]);
        }
        setBuildingArray(newBuildings);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    console.log(buildingArray);
  }, [buildingArray]);

  return (
    <>
      {buildingArray.map((building, index) => (
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
