import { getRequest } from '../utils/requestHelper'
import { FETCH_ARTICLES } from './types'

export const fetchArticles = (title) => async (dispatch) => {
  let response;

  if (title) {
    response = await getRequest(`/api/articles?title=${title}`);
  } else {
    response = await getRequest(`/api/articles`);
  };
  
  dispatch({ type: FETCH_ARTICLES, payload: response });
};