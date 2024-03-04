import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styled from 'styled-components';

// Use viewport units or percentages for a responsive design
const ToggleButton = styled.button`
  position: fixed;
  top: 5vh; // 5% of the viewport height from the top
  right: 5vw; // 5% of the viewport width from the right
  z-index: 1000;
`;

const DrawerRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ToggleButton onClick={toggleDrawer}>Toggle Drawer</ToggleButton>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right" // Set the direction to open the drawer from the right
        style={{ width: '50vw' }} // Use viewport width for responsive drawer width
      >
        <h2>Drawer Content</h2>
        <p>This is the content inside the drawer!</p>
      </Drawer>
    </div>
  );
};

export default DrawerRight;
