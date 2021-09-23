import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { sortOptions } from './sortOptions'

const SearchBar = () => {
  const [] = useState('')

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
        <form>
          <input className='searchbar' />
          <button className='icon-btn'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className='sort-block'>
        <select className='sort-select'>
          {_renderSortOptions()}
        </select>
      </div>
    </div>
  )
};

export default SearchBar;
