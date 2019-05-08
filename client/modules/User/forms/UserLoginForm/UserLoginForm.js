import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { Link } from 'react-router';

import { authenticateUser } from '../../../../store/actions/UserActions';
import SocialButton from '../../components/SocialButton/SocialButton';

class UserLoginForm extends Component {
  handleLoginClick = () => {
    // todo: make this legit.
    this.props.dispatch(authenticateUser(this.refs.username.value, this.refs.pass.value));
  };

  render() {
    if (this.props.user._id) {
      window.location = '/';
    }

    const styles = this.props.styles;
    const messages = this.props.intl.messages;

    return (
      <form>
        <div>
          <SocialButton
            provider="google"
            appId="12345"
          >
            Login with Google
          </SocialButton>
        </div>
        <label className={styles.label} htmlFor="username">{messages.username}</label>
        <div className={`${styles.input} ${styles['input-fullWidth']}`}>
          <input id="username" placeholder={messages.username} type="text" ref="username"/>
        </div>
        <label className={styles.label} htmlFor="pass">{messages.pass}</label>
        <div className={`${styles.input} ${styles['input-fullWidth']}`}>
          <input id="pass" placeholder={messages.pass} type="password" ref="pass"/>
        </div>
        <div>
          <Link to="/user/register">Create an account</Link>
          <a className={styles.button} href="#" onClick={this.handleLoginClick}><FormattedMessage id="submit"/></a>
        </div>

      </form>
    );
  }
}

UserLoginForm.propTypes = {
  dispatch: PropTypes.func,
  intl: intlShape.isRequired,
  styles: PropTypes.object,
  user: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
    user: state.user,
  };
}

export default connect(mapStateToProps)(injectIntl(UserLoginForm));
