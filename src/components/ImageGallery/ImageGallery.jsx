import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImageGalleryCss from './ImageGalleryCss.module.css';

class ImageGallery extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.images !== this.props.images;
  }

  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className={ImageGalleryCss.imageGallery}>
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
