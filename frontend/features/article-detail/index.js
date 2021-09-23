import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

import { getRequest } from '../../utils/requestHelper'

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    _fetchArticle()
  },[]);

  const _fetchArticle = async () => {
    const response = await getRequest(`/api/articles/${id}`);
    setArticle(response)
  };

  return (
    <div className="article-detail-container">
      <p>Welcome to the detail page.</p>
      <p>{article && article.body}</p>
    </div>
  );
};

export default ArticleDetail;