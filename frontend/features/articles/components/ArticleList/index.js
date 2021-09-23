// Libraries
import React from "react";

import ArticleItem from '../ArticleItem';

/**
 * props
 * @param { Object } articles - Article objects fetched from database.
*/
const ArticleList = ({ articles }) => {
  const _renderItems = () => {
    return articles.map((article) => {
      return <ArticleItem key={article.id} article={article} />
    })
  }
  return (
    <div className='article-list-container'>
      {articles && _renderItems()}
    </div>
  )
};

export default ArticleList;
