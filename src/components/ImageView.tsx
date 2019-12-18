import React from 'react';
import styled from 'styled-components';
import { Image } from '../types/image';
import { IMAGE_BUFFER } from '../stores/ImageSliderStore';

type Props = {
  images: Image[];
  volume: number;
};

const ImageView = (props: Props) => {
  const { images, volume } = props;
  const imageList: JSX.Element[] = [];

  // Don't add keys because they make the app heavier, especially on iOS.
  const loadedImages = React.useMemo(
    () => (index: number) =>
      volume === index
        ? images.map(image => <ImageStyled src={image.src} alt="" />)[index]
        : images.map(image => <ImageStyled src={image.src} alt="" isHidden />)[index],
    [volume]
  );
  const imageCaches = React.useMemo(
    () => images.map(image => <ImageStyled src={image.src} alt="" isHidden />),
    [images]
  );

  images.map(i => {
    imageList.push(loadedImages(i.id - IMAGE_BUFFER));
  });

  return (
    <ImageWrapper>
      {imageList}
      {imageCaches}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -13%;
  pointer-events: none;
  user-select: none;
`;
const ImageStyled = styled.img<{ isHidden?: boolean }>`
  object-fit: contain;
  width: 100%;
  height: auto;
  display: ${props => (props.isHidden ? 'none' : 'block')};
`;

export default ImageView;
