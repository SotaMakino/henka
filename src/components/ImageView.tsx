import React from 'react';
import styled from 'styled-components';
import { Image } from '../types/image';

type Props = {
  images: Image[];
  volume: number;
};

export const IMAGE_BUFFER = 1;

const ImageView = (props: Props) => {
  const { images, volume } = props;
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

  return (
    <ImageWrapper>
      {loadedImages(volume - IMAGE_BUFFER)}
      {loadedImages(volume)}
      {loadedImages(volume + IMAGE_BUFFER)}
      {imageCaches}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2%;
  pointer-events: none;
`;
const ImageStyled = styled.img<{ isHidden?: boolean }>`
  object-fit: contain;
  width: 100%;
  height: auto;
  display: ${props => (props.isHidden ? 'none' : 'inherit')};
`;

export default ImageView;
