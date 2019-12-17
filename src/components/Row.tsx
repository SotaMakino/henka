import React from 'react';
import { RowImages } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Row = () => {
  const store = new ImageSliderStore(RowImages);
  return <ImageRender store={store} />;
};

export default Row;
