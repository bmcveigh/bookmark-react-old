import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import styles from '../LoginPage/LoginPage.css';

export class RegistrationPage extends Component {

  handleFormSubmit = () => {
    const usernameRef = this.refs.username;
    const emailRef = this.refs.email;
    const passRef = this.refs.pass;

    if (usernameRef && emailRef && passRef) {
      // todo: register the user.
    }
  };

  render() {
    return (
      <div>
        <input ref="username" className={styles['form-field']} placeholder={this.props.intl.messages.username} />
        <input placeholder={"Email"} className={styles['form-field']} ref="email" />
        <input type="password" placeholder={this.props.intl.messages.username} ref="pass" className={styles['form-field']} />
        <button className={styles['post-submit-button']} onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }

}

RegistrationPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RegistrationPage);
