import React, { Component } from 'react';
import { Puff } from 'react-loader-spinner';
import LoaderCss from './LoaderCss.module.css'

class Loader extends Component {
  render() {
    return (
      <div className={LoaderCss.loader}>
        <Puff type="Puff" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
}

export default Loader;