import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer'

export const reducers = combineReducers({
  articles: articlesReducer
});