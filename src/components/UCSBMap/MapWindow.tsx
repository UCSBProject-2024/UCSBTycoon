<<<<<<< Updated upstream
import React from 'react';
import './MapWindow.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Map from './Map';
const MapWindow = () => {
  return (
    <div className="MapWindow">
      <TransformWrapper
        initialScale={2.5}
        limitToBounds={true}
        disablePadding={true}
        panning={{ velocityDisabled: true }}>
        <TransformComponent>
          <Map />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};
export default MapWindow;
=======
import React from 'react';
import './MapWindow.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Map from './Map';
const MapWindow = () => {
  return (
      <TransformWrapper initialScale={1} limitToBounds={true} disablePadding={true}>
        <TransformComponent>
          <Map />
        </TransformComponent>
      </TransformWrapper>
  );
};
export default MapWindow;
>>>>>>> Stashed changes
