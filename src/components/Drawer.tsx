import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styled from 'styled-components';
import './Drawer.css';
// Use viewport units or percentages for a responsive design


const DrawerRight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerWidth = '30vw';
  const [buttonPosition, setButtonPosition] = useState('0px');

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen){
        //move button out with the drawer width
        setButtonPosition(drawerWidth);
    } else{
        //reset position when drawer is closed
        setButtonPosition('0px');
    }
  }, [isOpen, drawerWidth]);
  
  return (
    <div>
        <button
            style = {{
                right: buttonPosition,
                transition: 'right 0.5s',
            }}
            className = "drawer-toggle-button"
            onClick = {toggleDrawer}
            >
               <p>&lt;</p>
            </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right" // Set the direction to open the drawer from the right
        style={{ width: drawerWidth }} // Use viewport width for responsive drawer width
      >
        <h2>Drawer Content</h2>
        <p>This is the content inside the drawer!</p>
      </Drawer>
    </div>
  );
};

export default DrawerRight;
