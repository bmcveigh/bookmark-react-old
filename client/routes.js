/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import RegistrationPage from './modules/User/pages/RegistrationPage/RegistrationPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Bookmark/pages/BookmarkListPage/BookmarkListPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          const isUserLoggedIn = typeof localStorage !== 'undefined' && localStorage.getItem('token') || false;

          if (isUserLoggedIn) {
            cb(null, require('./modules/Bookmark/pages/BookmarkListPage/BookmarkListPage').default);
          }
          // Fix ESLint issue.
          if (!isUserLoggedIn) {
            cb(null, require('./modules/User/pages/LoginPage/LoginPage').default);
          }
        });
      }}
    />
    <Route
      path="/space/:id"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          const isUserLoggedIn = typeof localStorage !== 'undefined' && localStorage.getItem('token') || false;

          if (isUserLoggedIn) {
            cb(null, require('./modules/Bookmark/pages/BookmarkListPage/BookmarkListPage').default);
          }
          // Fix ESLint issue.
          if (!isUserLoggedIn) {
            cb(null, require('./modules/User/pages/LoginPage/LoginPage').default);
          }
        });
      }}
    />
    <Route
      path="/user/profile"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Bookmark/pages/UserProfilePage/UserProfilePage').default);
        });
      }}
    />
    <Route
      path="/user/profile/appearance"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./components/pages/user/UserThemeSettingsPage/UserThemeSettingsPage').default);
        });
      }}
    />
    <Route
      path="/user/register"
      component={RegistrationPage}
    />
      }}
    />
  </Route>
);
