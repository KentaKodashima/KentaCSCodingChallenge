import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../actions';
import { ArticleList, SearchBar } from './components/';
import { convertDateToUTC } from '../../utils/dateHelper';
import { sortOptions } from './components/SearchBar/sortOptions';

/**
 * An article
 * article: {
 *   author {
 *     created_at: Date
 *     first_name: string
 *     id: number
 *     last_name: string
 *     updated_at: Date
 *   },
 *   body: string
 *   created_at: Date
 *   id: number
 *   image_url: string
 *   introduction: string
 *   title: string
 *   updated_at: Date
 * }
*/
const Articles = ({ fetchArticles, articles: fetchedArticles }) => {
  const [articles, setArticles] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState(sortOptions[0].value)

  useEffect(() => {
    fetchArticles();
  },[]);

  useEffect(() => {
    setArticles(fetchedArticles);
  },[fetchedArticles]);

  /**
   * A callback to be called whenever the search bar value changes.
   * @param { ChangeEvent<HTMLInputElement> } e - HTML input change event
  */
  const onSearchBarChange = (e) => {
    setSearchValue(e.target.value);
  };

  /**
   * A callback to be called on form submission.
   * @param { FormEvent<HTMLFormElement> } e - HTML Form submission event
  */
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchArticles(searchValue);
  };

  /**
   * A helper function for handleSortValueChange to sort articles.
   * components/SearchBar/sortOptions.js
   * export const sortOptions = [
   *   { label: 'Latest', value: 'latest' },
   *   { label: 'Title', value: 'title' },
   * ]
   * @param { string } targetValue - The sort option
   * @param { Object[] } articles - Articles to sort
  */
  const _sortArticles = (targetValue, articles) => {
    let newArticles;

    switch (targetValue) {
      case sortOptions[0].value:
        newArticles = articles.sort((article1, article2) => {
          const date1 = convertDateToUTC(new Date(article1.created_at));
          const date2 = convertDateToUTC(new Date(article2.created_at));
          return date1 - date2;
        });
      case sortOptions[1].value:
        newArticles = articles.sort((article1, article2) => {
          const str1 = article1.title.toLowerCase();
          const str2 = article2.title.toLowerCase();
          return str1.localeCompare(str2);
        });
      default:
        newArticles = articles;
    }

    setArticles(newArticles);
  };

  /**
   * A callback to be called whenever the select value changes.
   * @param { FormEvent<HTMLFormElement> } e - HTML Form submission event
  */
  const handleSortValueChange = (e) => {
    const newValue = e.target.value;
    setSortValue(newValue);

    _sortArticles(newValue, articles);
  };
  
  return (
    <div className='articles-container'>
      <SearchBar
        onChange={onSearchBarChange}
        onFormSubmit={onFormSubmit}
        onSelectionChange={handleSortValueChange}
        inputValue={searchValue}
        selectValue={sortValue}
      />
      {fetchArticles && <ArticleList articles={articles} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { fetchArticles }
)(Articles);