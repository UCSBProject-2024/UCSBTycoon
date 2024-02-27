import React from 'react';
const Map: React.FC = () => {
  const MapImg = '/Images/UCSBMap.png';
  // const onClick = () => {
  //   console.log('Clicked!');
  // };
  return <img src={MapImg} alt={'UCSBMap'} style={{ width: '100vh', height: '100vh' }} />;
};

export default Map;
