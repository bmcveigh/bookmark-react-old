import React from 'react';
import socialLogin from 'react-social-login';

const Button = ({ children, triggerLogin, ...props }) => (
  <button
    className="btn btn-primary"
    onClick={triggerLogin} {...props}
  >
    {children}
  </button>
);

export default socialLogin(Button);
