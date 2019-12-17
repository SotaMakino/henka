import React from 'react';
import { PlaImages, PlaTitle } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Pla = () => {
  const store = new ImageSliderStore(PlaImages);
  return <ImageRender store={store} title={PlaTitle} />;
};

export default Pla;
