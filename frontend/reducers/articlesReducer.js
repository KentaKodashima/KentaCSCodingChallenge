import { FETCH_ARTICLES } from '../actions'

const INITIAL_STATE = null

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload
    default:
      return state
  }
};