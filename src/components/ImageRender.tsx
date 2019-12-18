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
  title: string;
};

const ImageRender = observer((props: Props) => {
  const { store, title } = props;
  return (
    <Wrapper>
      <Loading images={store.imageUrls} />
      <TitleWrapper>
        <TitleImage src={title} />
      </TitleWrapper>
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
  padding: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
`;
const TitleImage = styled.img`
  width: 30%;
  z-index: 0;
`;
const SliderWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 0 30px;
`;

export default ImageRender;
