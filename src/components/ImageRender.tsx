import React from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';
import Loading from './LoadingView';
import ImageView from './ImageView';
import ImageSliderStore, { IMAGE_BUFFER } from '../stores/ImageSliderStore';
import '../styles/slider.css';
import { observer } from 'mobx-react-lite';

type Props = {
  store: ImageSliderStore;
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

const Wrapper = styled.div``;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 0 30px;
`;

export default ImageRender;
