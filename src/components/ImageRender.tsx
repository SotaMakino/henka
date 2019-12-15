import React from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import '../styles/slider.css';
import { Image } from '../types/image';
import Loading from './LoadingView';

type Props = {
  images: Image[];
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
      <Loading images={preloadedImages} />
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
  padding: 20px;
`;
const ImageView = styled.div`
  margin-top: -7%;
  user-select: none;
  pointer-events: none;
  text-align: center;
`;
const SliderWrapper = styled.div`
  position: relative;
  top: -50px;
  left: 1%;
  right: auto;
  max-width: 500px;
  padding: 0 400px;
  text-align: center;
`;

export default ImageRender;
