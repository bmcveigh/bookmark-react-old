/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './reducers/AppReducer';
import bookmarks from './reducers/BookmarkReducer';
import intl from './reducers/IntlReducer';
import styles from './reducers/globalStylesReducer';
import tabData from './reducers/tabDataReducer';
import user from './reducers/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  bookmarks,
  intl,
  styles,
  tabData,
  user,
});
