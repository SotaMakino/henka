import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import ImgPreloader from 'react-img-preloader';
import styled from 'styled-components';

type Props = {
  images: {
    id: number;
    src: any;
  }[];
};

const IMAGE_BUFFER = 1;

const ImageRender = (props: Props) => {
  const { images } = props;
  const [volume, setVolume] = React.useState<number>(0);
  const handleOnChange = React.useCallback((value: number) => {
    setVolume(value);
  }, []);

  const imageNodes = React.useMemo(() => images.map(image => <img src={image.src} alt="" />), [
    images
  ]);
  const imageCaches = React.useMemo(
    () => images.map(image => <img src={image.src} style={{ display: 'none' }} alt="" />),
    [images]
  );
  const preloadedImages = React.useMemo(() => images.map(image => image.src), [images]);
  const loadImage = React.useMemo(
    () => (index: number) => (volume === index ? imageNodes[index] : imageCaches[index]),
    [volume]
  );

  return (
    <Wrapper>
      <ImgPreloader
        imgs={preloadedImages}
        onComplete={() => {
          console.log('All images are loaded');
        }}
      >
        {({ loaded, total }: any) => (
          <Loading>
            {loaded}/{total}
          </Loading>
        )}
      </ImgPreloader>
      <ImageView>
        {loadImage(volume - IMAGE_BUFFER)}
        {loadImage(volume)}
        {loadImage(volume + IMAGE_BUFFER)}
        {imageCaches}
      </ImageView>
      <SliderWrapper>
        <Slider
          value={volume}
          max={imageNodes.length - IMAGE_BUFFER}
          tooltip={false}
          onChange={handleOnChange}
        />
      </SliderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
`;
const ImageView = styled.div`
  padding: 30px;
  object-fit: cover;
  user-select: none;
  text-align: center;
`;
const SliderWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 400px;
`;

export default ImageRender;
