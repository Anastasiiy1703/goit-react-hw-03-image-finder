import React, { Component } from 'react';
import ButtonCss from '../Button/ButtonCss.module.css';

class Button extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <button className={ButtonCss.button} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

export default Button;