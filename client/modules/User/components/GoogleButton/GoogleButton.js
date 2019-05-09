import React, { Component } from 'react';

import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';

import PropTypes from 'prop-types';
import { getGoogleUser } from '../../../../store/actions/googleUserActions';

class GoogleButton extends Component {
  componentDidMount() {
    this.props.dispatch(getGoogleUser());
  }

  responseGoogle() {}

  render() {
    return (
      <span>
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
};

export default connect(mapStateToProps)(GoogleButton);
