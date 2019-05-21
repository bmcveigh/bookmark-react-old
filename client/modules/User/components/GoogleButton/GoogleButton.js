import React, { Component } from 'react';

import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';

import PropTypes from 'prop-types';
import { getGoogleUser } from '../../../../store/actions/googleUserActions';

import classes from './GoogleButton.css';

class GoogleButton extends Component {
  componentDidMount() {
    this.props.dispatch(getGoogleUser());
  }

  responseGoogle() {}

  /**
   * Log the user out of their Google session.
   *
   * @param e
   */
  logout(e) {
    e.preventDefault();
    window.gapi.auth2.getAuthInstance().signOut();
    window.location.reload();
  }

  render() {
    return (
      <span>
        <span className={this.props.googleUser.getId ? classes.LoggedIn : ''}>
          {
            typeof window !== 'undefined' ? (
              <GoogleLogin
                clientId="51928739653-qc1a21ee2ak22jl7ip7gh2t0o21vkej5.apps.googleusercontent.com"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                redirectUri={`${window.location.origin}/auth`}
                scope="profile email"
                uxMode="redirect"
              />
            ) : null
          }
        </span>
        {
          this.props.googleUser.getId ? (
            <a
              href="#"
              onClick={(e) => this.logout(e)}
            >
              Logout
            </a>
          ) : null
        }
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    googleUser: state.googleUser,
  };
}

GoogleButton.propTypes = {
  dispatch: PropTypes.func,
  googleUser: PropTypes.object,
};

export default connect(mapStateToProps)(GoogleButton);
