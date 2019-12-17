import React from 'react';
import { RowImages } from '../constants/RowImages';
import ImageRender from '../components/ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Top = () => {
  const store = new ImageSliderStore(RowImages);
  return <ImageRender store={store} />;
};

export default Top;
