import React, { Component } from 'react';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar/Searchbar';
import Modal from '../components/Modal/Modal';
import AppCss from './AppCss.module.css';

class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    selectedImage: null,
    page: 1,
    perPage: 12,
    hasMoreImages: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  handleSearch = (query) => {
    this.setState({ query, images: [], page: 1, hasMoreImages: true });
  };

  fetchImages = () => {
    const { query, page, perPage } = this.state;
    const API_KEY = '40348262-2107765f6b36d63fd98d1181e';
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`;

    this.setState({ isLoading: true });

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const receivedImages = data.hits || [];
        if (receivedImages.length < perPage) {
          this.setState({ hasMoreImages: false });
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...receivedImages],
          isLoading: false,
          page: prevState.page + 1,
        }));
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = (image) => {
    this.setState({ selectedImage: image, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, hasMoreImages } = this.state;

    return (
      <div className={AppCss.App}>
        <Searchbar onSubmit={this.handleSearch} />

        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 && (
            <ImageGallery
              images={images.map((image) => ({
                id: image.id,
                src: image.webformatURL,
                srcLarge: image.largeImageURL,
                alt: image.tags,
              }))}
              onImageClick={this.handleImageClick}
            />
          )
        )}

        {images.length > 0 && !isLoading && hasMoreImages && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}

      </div>
    );
  }
}

export default App;
