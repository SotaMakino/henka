import React from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import '../styles/slider.css';
import { Image } from '../types/image';
import Loading from './LoadingView';
import ImageView, { IMAGE_BUFFER } from './ImageView';

type Props = {
  images: Image[];
};

const ImageRender = (props: Props) => {
  const { images } = props;
  const [volume, setVolume] = React.useState<number>(0);
  const handleOnChange = React.useCallback((value: number) => {
    setVolume(value);
  }, []);
  const preloadedImages = React.useMemo(() => images.map(image => image.src), [images]);

  return (
    <Wrapper>
      <Loading images={preloadedImages} />
      <ImageView images={images} volume={volume} />
      <SliderWrapper>
        <Slider
          value={volume}
          max={images.length - IMAGE_BUFFER}
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
