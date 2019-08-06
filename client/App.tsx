/**
 * Root Component
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import IntlWrapper from './modules/Intl/IntlWrapper';
// Import Routes
import PageWrapper from './components/containers/PageWrapper/PageWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

// Base stylesheet
require('./dist/sierra.css');

interface IApp {
  store: any;
}

export default function App(props: IApp): React.ReactNode {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <PageWrapper />
      </IntlWrapper>
    </Provider>
  );
}
