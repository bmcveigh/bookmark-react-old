import React from 'react';
import SocialButton from '../SocialButton';

const handleSocialLogin = (user) => {
  // console.log(user);
};

const handleSocialLoginFailure = (err) => {
  // console.error(err);
};

const GoogleButton = () => (
  <SocialButton
    provider="google"
    appId="51928739653-qc1a21ee2ak22jl7ip7gh2t0o21vkej5.apps.googleusercontent.com"
    onLoginSuccess={handleSocialLogin}
    onLoginFailure={handleSocialLoginFailure}
    scope="profile"
  >
    Login with Google
  </SocialButton>
);

export default GoogleButton;
