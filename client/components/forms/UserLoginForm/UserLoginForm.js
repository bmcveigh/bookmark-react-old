import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { authenticateUser } from '../../../store/actions/UserActions';
import { Link } from 'react-router';

class UserLoginForm extends Component {
  handleLoginClick = () => {
    // todo: make this legit.
    this.props.dispatch(authenticateUser(this.refs.username.value, this.refs.pass.value));
  };

  render() {
    const styles = this.props.styles;
    const messages = this.props.intl.messages;

    return (
      <form>
        <label className={styles.label} htmlFor="username">{messages.username}</label>
        <div className={`${styles.input} ${styles['input-fullWidth']}`}>
          <input id="username" placeholder={messages.username} type="text" ref="username" />
        </div>
        <label className={styles.label} htmlFor="pass">{messages.pass}</label>
        <div className={`${styles.input} ${styles['input-fullWidth']}`}>
          <input id="pass" placeholder={messages.pass} type="password" ref="pass" />
        </div>
        <div>
          <Link to="/user/register">Create an account</Link>
          <a className={styles.button} href="#" onClick={this.handleLoginClick}><FormattedMessage id="submit" /></a>
        </div>
      </form>
    );
  }
}

UserLoginForm.propTypes = {
  dispatch: PropTypes.func,
  intl: intlShape.isRequired,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    authenticateUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(UserLoginForm));
