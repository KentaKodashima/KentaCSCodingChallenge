import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getRequest } from '../../utils/requestHelper'

const BASE_URL = process.env.REACT_APP_BASE_SERVER_URL

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    _fetchArticle()
  },[]);

  const _fetchArticle = async () => {
    // TODO: See if I can fix the CORS error on the frontend.
    const response = await getRequest(`${BASE_URL}/api/articles/${id}`);
    console.log(response, 'resp');
  };

  return (
    <div className="article-detail-container">
      
    </div>
  );
};

export default ArticleDetail;