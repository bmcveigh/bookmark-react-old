import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import styles from '../LoginPage/LoginPage.css';

class RegistrationPage extends Component {
  render() {
    return (
      <div>
        <input ref="username" className={styles['form-field']} placeholder={this.props.intl.messages.username} />
        <input placeholder={"Email"} className={styles['form-field']} ref="email" />
        <input type="password" placeholder={this.props.intl.messages.username} ref="pass" className={styles['form-field']} />
        <button>Submit</button>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RegistrationPage);
