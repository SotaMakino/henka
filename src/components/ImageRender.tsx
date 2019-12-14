import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import ImgPreloader from 'react-img-preloader';

type Props = {
  images: {
    id: number;
    src: any;
  }[];
};

const ImageRender = (props: Props) => {
  const { images } = props;
  const [volume, setVolume] = React.useState<number>(0);
  const handleOnChange = React.useCallback((value: number) => {
    setVolume(value);
  }, []);

  const imageNodes = React.useMemo(() => images.map(image => <img src={image.src} alt="" />), []);
  const imageCaches = React.useMemo(
    () => images.map(image => <img src={image.src} style={{ display: 'none' }} alt="" />),
    []
  );
  const preloadedImages = React.useMemo(() => images.map(image => image.src), []);
  const loadImage = React.useMemo(
    () => (index: number) => (volume === index ? imageNodes[index] : imageCaches[index]),
    [volume]
  );

  return (
    <div style={{ position: 'fixed' }}>
      <ImgPreloader
        imgs={preloadedImages}
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
        {loadImage(volume - 1)}
        {loadImage(volume)}
        {loadImage(volume + 1)}
        {imageCaches}
      </div>
      <div style={{ width: '500px', marginLeft: '50px' }}>
        <Slider value={volume} max={imageNodes.length} tooltip={false} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default ImageRender;
