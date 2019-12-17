import React from 'react';
import { PlaImages } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Pla = () => {
  const store = new ImageSliderStore(PlaImages);
  return <ImageRender store={store} />;
};

export default Pla;
