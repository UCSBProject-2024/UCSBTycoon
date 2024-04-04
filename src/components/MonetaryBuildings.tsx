import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

interface BuildingProps {
  x: number;
  y: number;
  hasBeenBought?: boolean;
  name: string;
  description: string;
}

const MonetaryBuildings: React.FC = () => {
  // Make building array with useState
  const [buildingArray, setBuildingArray] = useState<BuildingProps[]>([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const initialData = localStorage.getItem('gameData');
    const parsedData = JSON.parse(initialData);
    setData(parsedData);

    const newBuildings: BuildingProps[] = [];
    if (parsedData && parsedData.KnowledgeBuildings && parsedData.KnowledgeBuildings.MultiplierBuildings) {
      for (let i = 0; i < parsedData.KnowledgeBuildings.MultiplierBuildings.length; i++) {
        newBuildings.push(parsedData.KnowledgeBuildings.MultiplierBuildings[i]);
      }
    }

    if (parsedData && parsedData.KnowledgeBuildings && parsedData.KnowledgeBuildings.IncomeBuildings) {
      for (let i = 0; i < parsedData.KnowledgeBuildings.IncomeBuildings.length; i++) {
        newBuildings.push(parsedData.KnowledgeBuildings.IncomeBuildings[i]);
      }
    }

    if (parsedData && parsedData.MoneyBuildings && parsedData.MoneyBuildings.MultiplierBuildings) {
      for (let i = 0; i < parsedData.MoneyBuildings.MultiplierBuildings.length; i++) {
        newBuildings.push(parsedData.MoneyBuildings.MultiplierBuildings[i]);
      }
    }

    if (parsedData && parsedData.MoneyBuildings && parsedData.MoneyBuildings.IncomeBuildings) {
      for (let i = 0; i < parsedData.MoneyBuildings.IncomeBuildings.length; i++) {
        newBuildings.push(parsedData.MoneyBuildings.IncomeBuildings[i]);
      }
    }
    setBuildingArray(newBuildings);
    console.log('All buildings:', newBuildings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (buildingName: string) => () => {
    console.log('Building clicked:', buildingName);     //Says what building is clicked
                                                        //sends building name to backend
    
  };

  return (
    <div>
      {buildingArray.map((building, index) => {
        const getButtonColor = (buildingName) => {
          if (
            buildingName === 'Library' ||
            buildingName === 'CLAS' ||
            buildingName === 'Buchanan Hall' ||
            buildingName === 'Phelps Hall'
          ) {
            return 'lightblue';
          } else if (
            buildingName === 'University Center(UCEN)' ||
            buildingName === 'Anacapa' ||
            buildingName === 'Arbor'
          ) {
            return 'lightgreen';
          }
        };

        const buttonColor = getButtonColor(building.name);
        return (
          <div key={index}>
            <Button
              style={{ borderRadius: '10px', backgroundColor: buttonColor, color: 'white', margin: '5px' }}
              onClick={handleClick(building.name)}>
              Name: {building.name}
              <p> </p>
              Description: {building.description}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default MonetaryBuildings;
