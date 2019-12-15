import { observable, computed, action } from 'mobx';
import { Image } from '../types/image';

export default class ImageSliderStore {
  @observable.shallow images: Image[];
  @observable volume: number;

  constructor(images: Image[]) {
    this.images = images;
    this.volume = 0;
  }

  @computed
  get imageUrls() {
    return this.images.map(image => image.src);
  }

  @computed
  get imageSize() {
    return this.images.length;
  }

  @action.bound
  setVolume(value: number) {
    this.volume = value;
  }
}
