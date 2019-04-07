/**
 * Root Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import IntlWrapper from './modules/Intl/IntlWrapper';

// Import Routes
import PageWrapper from './components/containers/PageWrapper/PageWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

// Base stylesheet
require('./dist/sierra.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <PageWrapper />
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
