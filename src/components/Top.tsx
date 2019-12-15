import React from 'react';
import { images } from '../constants/images';
import ImageRender from '../components/ImageRender';
import ImageSliderStore from '../stores/ImageSliderStore';

const Top = () => {
  const store = new ImageSliderStore(images);
  return <ImageRender store={store} />;
};

export default Top;
