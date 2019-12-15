import React from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import Loading from './LoadingView';
import ImageView, { IMAGE_BUFFER } from './ImageView';
import ImageStore from '../stores/ImageSliderStore';
import '../styles/slider.css';
import { observer } from 'mobx-react-lite';

type Props = {
  store: ImageStore;
};

const ImageRender = observer((props: Props) => {
  const { store } = props;
  return (
    <Wrapper>
      <Loading images={store.imageUrls} />
      <ImageView images={store.images} volume={store.volume} />
      <SliderWrapper>
        <Slider
          value={store.volume}
          max={store.imageSize - IMAGE_BUFFER}
          tooltip={false}
          onChange={store.setVolume}
        />
      </SliderWrapper>
    </Wrapper>
  );
});

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
