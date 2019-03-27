/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import bookmarks from './modules/Bookmark/BookmarkReducer';
import intl from './modules/Intl/IntlReducer';
import styles from './store/reducers/globalStylesReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  bookmarks,
  intl,
  styles,
  user,
});
