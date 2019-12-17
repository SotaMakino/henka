import React from 'react';
import { KonaImages } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Kona = () => {
  const store = new ImageSliderStore(KonaImages);
  return <ImageRender store={store} />;
};

export default Kona;
