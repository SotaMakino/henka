import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { images } from '../constants/images';

const imageNodes = images.map(image => <img key={image.id} src={image.src} />);
const imageCache = images.map(image => (
  <img key={image.id} src={image.src} style={{ visibility: 'hidden' }} />
));

const App = () => {
  const [volume, setVolume] = React.useState<number>(0);

  const handleOnChange = (value: number) => {
    setVolume(value);
  };
  return (
    <>
      <div style={{ height: '50px', width: '100px', userSelect: 'none' }}>
        {imageNodes[volume]}
        {imageCache}
      </div>
      <div style={{ width: '500px', marginLeft: '50px' }}>
        <Slider value={volume} max={93} tooltip={false} onChange={handleOnChange} />
      </div>
    </>
  );
};

export default App;
