import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router';

import styles from '../LoginPage/LoginPage.css';
import { connect } from 'react-redux';
import { addUserRegistration } from '../../../../store/actions/UserActions';


export class RegistrationPage extends Component {

  handleFormSubmit = () => {
    const usernameRef = this.refs.username.value;
    const emailRef = this.refs.email.value;
    const passRef = this.refs.pass.value;

    const data = {
      username: usernameRef,
      email: emailRef,
      pass: passRef,
    };

    if (usernameRef && emailRef && passRef) {
      // todo: register the user.
      addUserRegistration(data);
    }
  };

  render() {
    return (
      <div>
        <input ref="username" className={styles['form-field']} placeholder={this.props.intl.messages.username} />
        <input placeholder={"Email"} className={styles['form-field']} ref="email" />
        <input type="password" placeholder={this.props.intl.messages.pass} ref="pass" className={styles['form-field']} />
        <button className={styles['post-submit-button']} onClick={this.handleFormSubmit}>Submit</button>
        <Link to="/">{this.props.intl.messages.cancel}</Link>
      </div>
    );
  }

}

RegistrationPage.propTypes = {
  intl: intlShape.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    user: [],
  };
}

export default connect(mapStateToProps)(injectIntl(RegistrationPage));

