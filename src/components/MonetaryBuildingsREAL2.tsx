import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { useGame } from '../hooks/useGame';

interface BuildingProps {
  x: number;
  y: number;
  hasBeenBought?: boolean;
  name: string;
  description: string;
}

const MonetaryBuildings: React.FC = () => {
  const gameDispatch = useGameDispatch();

  // Make building array with useState
  const [buildingArray, setBuildingArray] = useState<BuildingProps[]>([]);
  const [data, setData] = useState([]);
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());

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

    const cashToDispatch = new Set(['Library', 'CLAS']); //ADD CASH BUILDINGS
    const knowledgeToDispatch = new Set(['University Center(UCEN)', 'Arbor']); //ADD KNOWLEDGE BUILDINGS

    if (cashToDispatch.has(buildingName) || knowledgeToDispatch.has(buildingName)) {
      gameDispatch({ type: 'update', subtype: 'cash' });  //sends building name to backend
      console.log('increment cash');
    }
    setClickedButtons((prevClickedButtons) => new Set(prevClickedButtons).add(buildingName));
  };

  return (
    <div>
      {buildingArray.map((building, index) => {
        const getButtonColor = (buildingName: string) => {
          if (clickedButtons.has(buildingName)) {
            return 'grey'; // Change button color to grey if clicked
          } else if (
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
