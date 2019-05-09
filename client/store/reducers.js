/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './reducers/AppReducer';
import bookmarks from './reducers/BookmarkReducer';
import googleUser from './reducers/googleUserReducer';
import intl from './reducers/IntlReducer';
import routeParams from './reducers/routeParamsReducer';
import styles from './reducers/globalStylesReducer';
import tabData from './reducers/tabDataReducer';
import user from './reducers/UserReducer';
import userPreferenceStyles from './reducers/userPreferenceStylesReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  bookmarks,
  googleUser,
  intl,
  routeParams,
  styles,
  tabData,
  user,
  userPreferenceStyles,
});
