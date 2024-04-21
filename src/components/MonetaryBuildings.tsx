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
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());


  useEffect(() => {
    const initialData = localStorage.getItem('gameData');
    const parsedData = JSON.parse(initialData);

    const newBuildings: BuildingProps[] = [];

    // Combine all building arrays
    const allBuildings = [
      ...(parsedData?.KnowledgeBuildings?.MultiplierBuildings || []),
      ...(parsedData?.KnowledgeBuildings?.IncomeBuildings || []),
      ...(parsedData?.MoneyBuildings?.MultiplierBuildings || []),
      ...(parsedData?.MoneyBuildings?.IncomeBuildings || []),
    ];

    // Iterate through all buildings to set initial state and add them to the newBuildings array
    allBuildings.forEach((building) => {
      const hasBeenBought = localStorage.getItem(building.name) === 'true';
      const isClicked = hasBeenBought || clickedButtons.has(building.name);
      newBuildings.push({ ...building, hasBeenBought, isClicked });
    });

    setBuildingArray(newBuildings);
  }, [clickedButtons]); // Update useEffect dependencies

  const handleClick = (buildingName: string) => () => {
    if (!clickedButtons.has(buildingName)) {
      console.log('Building clicked:', buildingName);

      // Mark the building as bought in local storage
      localStorage.setItem(buildingName, 'true');
      const cashToDispatch = new Set(['Library', 'CLAS']); //ADD CASH BUILDINGS
      const knowledgeToDispatch = new Set(['University Center(UCEN)', 'Arbor']); //ADD KNOWLEDGE BUILDINGS

      if(cashToDispatch.has(buildingName)){
        gameDispatch({ type: 'update', subtype: 'cashMult' });  //sends building name to backend
        console.log('increment cash');
      }
      else if(knowledgeToDispatch.has(buildingName)){
        gameDispatch({ type: 'update', subtype: 'knowledgeMult' });  //sends building name to backend
        console.log('increment knowledge');
  
      }
      setClickedButtons((prevClickedButtons) => new Set(prevClickedButtons).add(buildingName));
    }
  };

  return (
    <div>
      {buildingArray.map((building, index) => {
        let buttonColor: string;
        if (building.hasBeenBought) {
          buttonColor = 'grey'; // Change button color to grey if the building has been bought
        } else if (
          building.name === 'Library' ||
          building.name === 'CLAS' ||
          building.name === 'Buchanan Hall' ||
          building.name === 'Phelps Hall'
        ) {
          buttonColor = 'lightblue';
        } else if (
          building.name === 'University Center(UCEN)' ||
          building.name === 'Anacapa' ||
          building.name === 'Arbor'
        ) {
          buttonColor = 'lightgreen';
        }

        return (
          <div key={index}>
            <Button
              style={{ borderRadius: '10px', backgroundColor: buttonColor, color: 'white', margin: '5px' }}
              onClick={handleClick(building.name)}
              disabled={building.hasBeenBought} // Disable button if building has been bought
            >
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
