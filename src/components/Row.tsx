import React from 'react';
import { RowImages, RowTitle } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Row = () => {
  const store = new ImageSliderStore(RowImages);
  return <ImageRender store={store} title={RowTitle} />;
};

export default Row;
