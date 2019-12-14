import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { images } from '../constants/images';
import ImgPreloader from 'react-img-preloader';

const imageNodes = images.map(image => <img src={image.src} alt="" />);
const imageCaches = images.map(image => <img src={image.src} style={{ display: 'none' }} alt="" />);

const App = () => {
  const [volume, setVolume] = React.useState<number>(0);
  const handleOnChange = React.useCallback((value: number) => {
    setVolume(value);
  }, []);
  const preloadImages = React.useMemo(() => images.map(image => image.src), []);
  const myImage = React.useMemo(
    () => (index: number) => (volume === index ? imageNodes[index] : imageCaches[index]),
    [volume]
  );

  return (
    <div style={{ position: 'fixed' }}>
      <ImgPreloader
        imgs={preloadImages}
        onComplete={() => {
          console.log('All images are loaded');
        }}
      >
        {({ loaded, total }: any) => (
          <div>
            {loaded}/{total}
          </div>
        )}
      </ImgPreloader>
      <div style={{ height: '50px', width: '100px', userSelect: 'none' }}>
        {myImage(volume - 3)}
        {myImage(volume - 2)}
        {myImage(volume - 1)}
        {myImage(volume)}
        {myImage(volume + 1)}
        {myImage(volume + 2)}
        {myImage(volume + 3)}
      </div>
      <div style={{ width: '500px', marginLeft: '50px' }}>
        <Slider value={volume} max={imageNodes.length} tooltip={false} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default App;
