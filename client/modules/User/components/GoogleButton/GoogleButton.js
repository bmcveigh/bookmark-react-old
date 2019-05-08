import React, { Component } from 'react';

import { GoogleLogin } from 'react-google-login';

class GoogleButton extends Component {
  responseGoogle() {}

  render() {
    return (
      <span>
        <GoogleLogin
          clientId="51928739653-qc1a21ee2ak22jl7ip7gh2t0o21vkej5.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          redirectUri={window.location.origin}
          scope="profile email"
          uxMode="redirect"
        />
      </span>
    );
  }
}

export default GoogleButton;
