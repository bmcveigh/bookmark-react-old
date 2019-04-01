import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import UserLoginForm from '../../../../components/forms/UserLoginForm/UserLoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LoginPage(props) {
  const styles = props.styles;

  return (
    <div className={styles['col-sm-4']}>
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
