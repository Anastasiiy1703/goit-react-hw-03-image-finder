import React, { Component } from 'react';
import ImageGalleryItemCss from './ImageGalleryItemCss.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { image, onImageClick } = this.props;
    onImageClick(image);
  };

  generateUniqueKey = () => {
    const keySet = new Set();

    return () => {
      let key = Math.floor(Math.random() * 1000000);
      while (keySet.has(key)) {
        key = Math.floor(Math.random() * 1000000);
      }
      keySet.add(key);
      return key;
    };
  };

  render() {
    const { image } = this.props;
    const generateKey = this.generateUniqueKey();

    return (
      <li key={generateKey()} className={ImageGalleryItemCss.ImageGalleryItem} onClick={this.handleClick}>
        <img src={image.src} alt={image.alt} className={ImageGalleryItemCss.ImageGalleryItemImage} />
      </li>
    );
  }
}

export default ImageGalleryItem;


