/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Bookmark/BookmarkReducer';
import intl from './modules/Intl/IntlReducer';
import user from './modules/Login/LoginReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  user,
});
