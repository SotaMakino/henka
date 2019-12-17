import React from 'react';
import { KonaImages, KonaTitle } from '../constants/Images';
import ImageRender from './ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Kona = () => {
  const store = new ImageSliderStore(KonaImages);
  return <ImageRender store={store} title={KonaTitle} />;
};

export default Kona;
