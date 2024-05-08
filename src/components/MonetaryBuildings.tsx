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
  const game = useGame();
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
      ...(parsedData?.MoneyBuildings?.MultiplierBuildings || []),
      ...(parsedData?.MoneyBuildings?.IncomeBuildings || []),
      ...(parsedData?.KnowledgeBuildings?.MultiplierBuildings || []),
      ...(parsedData?.KnowledgeBuildings?.IncomeBuildings || [])
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
      if (buildingName === 'The Club & Guest House' && game?.cash >= 100) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 100});
      }
      if (buildingName === 'University Center(UCEN)' && game?.cash >= 500) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 500});
      }
      if (buildingName === 'De La Guerra Dining Hall' && game?.cash >= 3000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 3000});
      }
      if (buildingName === 'San Miguel Residence Hall' && game?.cash >= 25000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 25000});
      }
      if (buildingName === 'San Nicholas Residence Hall' && game?.cash >= 200000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 200000});
      }
      if (buildingName === 'Santa Cruz Residence Hall' && game?.cash >= 1000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 1000000});
      }
      if (buildingName === 'Anacapa Residence Hall' && game?.cash >= 5000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 5000000});
      }
      if (buildingName === 'Carrillo Dining Hall' && game?.cash >= 15000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 15000000});
      }
      if (buildingName === 'Ortega Dining Hall' && game?.cash >= 500000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'cashMult' }); //sends building name to backend
        console.log('increment cash');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 500000000});
      }
      //knowledgeBuildings
      if (buildingName === 'Library' && game?.knowledge >= 100) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:2 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 100});
      }
      if (buildingName === 'Student Resource Building(SRB)' && game?.knowledge >= 500) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:5 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 500});
      }
      if (buildingName === 'Phelps Hall' && game?.knowledge >= 3000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:10 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 3000});
      }
      if (buildingName === 'Campbell Hall' && game?.knowledge >= 25000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:30 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 25000});
      }
      if (buildingName === 'Harold Frank Hall' && game?.knowledge >= 200000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:100 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 200000});
      }
      if (buildingName === 'Buchanan Hall' && game?.knowledge >= 1000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:500 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 1000000});
      }
      if (buildingName === 'Chemistry Building' && game?.knowledge >= 5000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:1000 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 5000000});
      }
      if (buildingName === 'Broida Hall' && game?.knowledge >= 15000000) {
        localStorage.setItem(buildingName, 'true');
        gameDispatch({ type: 'update', subtype: 'knowledgeIncrementAmount', incrementKnowledgeAmount:5000 }); //sends building name to backend
        console.log('increment knowledge');
        gameDispatch({ type: 'update', subtype: 'setCash', cash: 15000000});
      }
      


      // if (cashToDispatch.has(buildingName)) {
        
      // } else if (knowledgeToDispatch.has(buildingName)) {
      //   gameDispatch({ type: 'update', subtype: 'knowledgeMult' }); //sends building name to backend
      //   console.log('increment knowledge');
      // }
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
          building.name === 'The Club & Guest House' ||
          building.name === 'University Center(UCEN)' ||
          building.name === 'De La Guerra Dining Hall' ||
          building.name === 'San Miguel Residence Hall' ||
          building.name === 'San Nicholas Residence Hall' ||
          building.name === 'Santa Cruz Residence Hall' ||
          building.name === 'Anacapa Residence Hall' ||
          building.name === 'Carrillo Dining Hall' ||
          building.name === 'Ortega Dining Hall'
        ) {
          buttonColor = 'lightgreen';
        } else if (
          building.name === 'Library' ||
          building.name === 'Student Resource Building(SRB)' ||
          building.name === 'Phelps Hall'||
          building.name === 'Campbell Hall' ||
          building.name === 'Harold Frank Hall' ||
          building.name === 'Buchanan Hall' ||
          building.name === 'Chemistry Building' ||
          building.name === 'Broida Hall'
        ) {
          buttonColor = 'lightblue';
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
