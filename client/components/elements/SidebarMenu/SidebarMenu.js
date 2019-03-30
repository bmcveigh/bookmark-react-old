import React from 'react';

import classes from './SidebarMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function SidebarMenu() {
  // https://codepen.io/Kamilica/pen/XRbvaL
  return (
    <div data-component={'sidebar'}>
      <div className={`${classes.sidebar}`}>
        <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['first-menu']}`}>
          <li className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}>
            <Link to="/user/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes.submenu}`}>
              <li className={`${classes['list-group-item']} ${classes['pl-4']}`}>
                <a href="#" className="">My Profile</a>

                <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['sub-submenu']}`}>
                  <span className={classes.arrow}></span>
                  <li className={`${classes['list-group-item']} ${classes['pl-4']}`}>
                    <a href="#">My Account</a>
                  </li>
                  <li className={`${classes['list-group-item']} ${classes['pl-4']}`}>
                    <a href="#">Preferences</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}>
            <Link to="/">
              <FontAwesomeIcon icon={faBookmark} />
            </Link>
          </li>
          <li className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}>
            <a href="#">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
