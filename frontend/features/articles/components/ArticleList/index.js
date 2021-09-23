// Libraries
import React from "react";

import ArticleItem from '../ArticleItem';

/**
 * props
 * @param { Object } articles - Article objects fetched from database.
*/
const ArticleList = ({ articles }) => {
  const renderItems = () => {
    return articles.map((article) => {
      return <ArticleItem />
    })
  }
  return (
    <div className='article-list-container'>
      Display some articles here!
    </div>
  )
};

export default ArticleList;
