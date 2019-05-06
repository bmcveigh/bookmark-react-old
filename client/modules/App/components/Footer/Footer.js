import React from 'react';

// Import Style
import classes from './Footer.css';

export function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Copyright}>
        &copy; 2019 Pakorasoft
      </div>
    </div>
  );
}

export default Footer;
