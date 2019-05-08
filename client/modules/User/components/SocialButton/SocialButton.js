import React from 'react';
import socialLogin from 'react-social-login';

import { Button } from 'reactstrap';

const SocialButton = ({ children, triggerLogin, ...props }) => (
  <Button
    onClick={triggerLogin} {...props}
  >
    {children}
  </Button>
);

export default socialLogin(SocialButton);
