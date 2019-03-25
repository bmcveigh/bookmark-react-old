import React, { Component } from 'react';
import styles from './LoginPage.css';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

class LoginPage extends Component {
  handleLoginClick = () => {
    // todo: make this legit.
    localStorage.setItem('token', 'token');
  };

  render() {
    return (
      <div>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.username} className={styles['form-field']} ref="username" />
          <input type="password" placeholder={this.props.intl.messages.pass} className={styles['form-field']} ref="pass" />
          <a href="/user/register">Create an account</a>
          <a className={styles['post-submit-button']} href="#" onClick={this.handleLoginClick}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LoginPage);
