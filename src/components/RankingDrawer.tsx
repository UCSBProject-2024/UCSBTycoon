import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styled from 'styled-components';
import './RankingDrawer.css';
import CollegeRankings from './CollegeRankings';
// Use viewport units or percentages for a responsive design

const Scrollable = styled.div`
  overflow: auto;
  max-height: 90%;
`;

const StyledH1 = styled.h1`
  background-color: #003660; // Change this to the desired background color
  color: white; // Text color
  padding: 1vw; // Padding to add some space around the text
  text-transform: none;
`;

const RankingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerWidth = '30vw';
  const [buttonPosition, setButtonPosition] = useState('0px');

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      //move button out with the drawer width
      setButtonPosition(drawerWidth);
    } else {
      //reset position when drawer is closed
      setButtonPosition('0px');
    }
  }, [isOpen, drawerWidth]);

  return (
    <div>
      <button
        style={{
          right: buttonPosition,
          top: '0vw',
          transition: 'right 0.5s',
          overflow: 'auto',
          backgroundColor: '#FEBC11'
        }}
        className="drawer-toggle-button"
        onClick={toggleDrawer}>
        <p>&lt;</p>
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right" // Set the direction to open the drawer from the right
        style={{ width: '30vw' }} // Use viewport width for responsive drawer width
      >
        <StyledH1>Rankings</StyledH1>
        <Scrollable>
        <CollegeRankings />
        </Scrollable>
      </Drawer>
    </div>
  );
};

export default RankingDrawer;
