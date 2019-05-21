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

import classes from './PageWrapper.css';

class PageWrapper extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(fetchUserFromSession());
    props.dispatch(setGlobalStyles(styles));
  }

  render() {
    return (
      <div className={classes.PageWrapper}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

PageWrapper.propTypes = {
  dispatch: PropTypes.func,
  fetchUserFromSession: PropTypes.func,
  setGlobalStyles: PropTypes.func,
};

export default connect(mapStateToProps)(PageWrapper);
