import React, { Component } from 'react';
import SearchbarCss from './SearchbarCss.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={SearchbarCss.Searchbar}>
        <form className={SearchbarCss.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchbarCss.SearchFormButton}>
            <span className={SearchbarCss.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={SearchbarCss.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;