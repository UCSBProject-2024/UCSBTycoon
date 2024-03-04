import React from 'react';
//import './MapWindow.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Map from './Map';
const MapWindow = () => {
  return (
    <TransformWrapper initialScale={2.5} limitToBounds={true} disablePadding={true}>
      <TransformComponent>
        <Map />
      </TransformComponent>
    </TransformWrapper>
  );
};
export default MapWindow;
