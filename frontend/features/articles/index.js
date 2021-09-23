import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchArticles } from '../../actions'
import { ArticleList, SearchBar } from './components/'

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
  
  return (
    <div className='articles-container'>
      <SearchBar
        onChange={onSearchBarChange}
        onFormSubmit={onFormSubmit}
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