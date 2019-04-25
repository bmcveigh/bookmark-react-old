import React from 'react';

import { injectIntl, intlShape } from 'react-intl';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import UserLoginForm from '../../../../components/forms/UserLoginForm/UserLoginForm';

import classes from './LoginPage.css';

function LoginPage(props) {
  const styles = props.styles;

  return (
    <div className={`${classes.LoginFormWrapper} ${styles['col-sm-4']}`}>
      <UserLoginForm />
    </div>
  );
}

LoginPage.propTypes = {
  intl: intlShape.isRequired,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
  };
}

export default connect(mapStateToProps)(injectIntl(LoginPage));
