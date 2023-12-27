import React from 'react';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSubmit, value, onChange }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        name="searchMovie"
        type="text"
        id="search"
        placeholder="Search movie"
        value={value}
        onChange={onChange}
      />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;