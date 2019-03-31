/**
 * Root Component
 */
import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Router, browserHistory } from 'react-router';

import styles from '../../../dist/sierra.css';
import { setGlobalStyles } from '../../../store/actions/globalStylesActions';

// Import Routes
import routes from '../../../routes';
import { fetchUserFromSession } from '../../../store/actions/UserActions';

class PageWrapper extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(props.fetchUserFromSession());
    props.dispatch(props.setGlobalStyles(styles));
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchUserFromSession,
    setGlobalStyles,
  };
}

PageWrapper.propTypes = {
  dispatch: PropTypes.func,
  fetchUserFromSession: PropTypes.func,
  setGlobalStyles: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
