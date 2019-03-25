/**
 * Root Component
 */
import React from 'react';

import { connect } from 'react-redux';

import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from '../routes';
import { fetchUserFromSession } from '../modules/User/UserActions';

class PageWrapper extends React.Component {

  constructor(props) {
    super(props);
    fetchUserFromSession();
  }

  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, fetchUserFromSession)(PageWrapper);
