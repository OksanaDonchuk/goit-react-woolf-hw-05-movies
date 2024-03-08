import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';
import React, { useEffect, useRef, useState } from 'react';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchQuery.get('query');
    search && setQuery(search);
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.length === 0) {
      alert('Please enter a search query');
      return;
    }
    setSearchQuery({ query });
  };

  const handleOnChange = evt => {
    setQuery(evt.target.value.toLowerCase());
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          ref={inputRef}
          className={css.search_input}
          name="search"
          type="search"
          placeholder="Search movies"
          value={query}
          onChange={handleOnChange}
        />

        <button type="submit" className={css.search_button}>
          <span className={css.search_button_label}>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
