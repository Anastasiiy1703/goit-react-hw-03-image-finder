import React, { Component } from 'react';
import ModalCss from './ModalCss.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleImageClick = () => {
    const { image, onImageClick } = this.props;
    onImageClick(image);
  };

  render() {
    const { image } = this.props;

    return (
      <div className={ModalCss.overlay} onClick={this.handleClose}>
        <div className={ModalCss.modal}>
          <img
            src={image.srcLarge}
            alt={image.alt}
            onClick={this.handleImageClick}
          />
        </div>
      </div>
    );
  }
}

export default Modal;

