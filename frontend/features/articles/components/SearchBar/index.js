import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { sortOptions } from './sortOptions';

/**
 * Props:
 * @param { string } inputValue - The current search bar value.
 * @param { Function } onChange - A function to get called whenever the search bar value changes.
 * @param { string } selectValue - The current select value.
 * @param { Function } onSelectionChange - A function to get called whenever the select value changes.
 * @param { Function } onFormSubmit - A function to get called on form submission.
*/
const SearchBar = (props) => {
  const {
    onFormSubmit,
    onChange,
    onSelectionChange,
    selectValue,
    inputValue
  } = props

  /**
   * Render options.
   * You can add a new obj inside sortOptions.js when you want to have another option.
   * Option obj: { label: 'Title', name: 'title' }
  */
  const _renderSortOptions = () => {
    return sortOptions.map((option, i) => {
      return (
        <option value={option.value} key={i}>
          {option.label}
        </option>
      )
    })
  }
  
  return (
    <div className="searchbar-container">
      <div className='searchbar-block'>
        <form
          name='search-bar-form'
          method='GET'
          onSubmit={onFormSubmit}
        >
          <input
            className='searchbar'
            onChange={onChange}
            value={inputValue}
          />
          <button className='icon-btn' type='submit'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className='sort-block'>
        <select
          className='sort-select'
          onChange={onSelectionChange}
          value={selectValue}
        >
          {_renderSortOptions()}
        </select>
      </div>
    </div>
  )
};

export default SearchBar;
