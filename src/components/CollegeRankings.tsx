import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { useGame } from '../hooks/useGame';
import styled from 'styled-components';

interface CollegeRanks {
  name: string;
  rank: number;
  knowledge: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Bubble = styled.div`
  background-color: #007bff;
  color: white;
  padding: 1vw;
  margin: 0.5vh;
  border-radius: 2vw;
  width: 100%; /* Take up the whole width */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: black; // Text color
  font-size: 1.5vw; // Font size
`;


const CollegeRankings: React.FC = () => {
  const game = useGame();
  const [data, setData] = useState([
    { label: 'Stanford', value: 600000 },
    { label: 'UC Los Angeles', value: 450000 },
    { label: 'UC Berkley', value: 375000 },
    { label: 'UC San Diego', value: 300000 },
    { label: 'UC Davis', value: 200000 },
    { label: 'UC Irvine', value: 125000 },
    { label: 'UC Merced', value: 50000 },
    { label: 'UC Reverside', value: 25000 },
    { label: 'UC Santa Cruz', value: 10000 },
    { label: 'UC Santa Barbara', value: 0 }
  ]);

  useEffect(() => {
    if (game) {
      const currentKnowledge = game?.knowledge;
      setData(prevData => {
        const newData = [...prevData];
        const playerCollegeIndex = newData.findIndex(item => item.label === 'UC Santa Barbara');
        if (playerCollegeIndex !== -1) {
          newData[playerCollegeIndex] = { ...newData[playerCollegeIndex], value: currentKnowledge };
        }
        return newData;
      });
    }
  }, [game]);

  const sortedColleges = data.sort((a, b) => b.value - a.value);

  return (
    <Container>
      {sortedColleges.map((item, index) => (
        <Bubble key={index} style={{ backgroundColor: index % 2 === 0 ? '#047C91' : '#9CBEBE' }}>
          <StyledSpan>{index + 1}. {item.label}</StyledSpan> {/* Show rank number on the left */}
          <StyledSpan>{item.value}</StyledSpan>
        </Bubble>
      ))}
    </Container>
  );
};

export default CollegeRankings;
