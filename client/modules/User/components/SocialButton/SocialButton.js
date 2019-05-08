import React from 'react';
import socialLogin from 'react-social-login';

const Button = ({ children, triggerLogin, ...props }) => (
  <div
    className="btn btn-primary"
    onClick={triggerLogin} {...props}
  >
    {children}
  </div>
);

export default socialLogin(Button);
