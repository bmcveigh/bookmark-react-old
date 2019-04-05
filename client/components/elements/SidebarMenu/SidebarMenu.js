import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import radium from 'radium';

import classes from './SidebarMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function SidebarMenu(props) {
  // https://codepen.io/Kamilica/pen/XRbvaL
  const links = [
    {
      label: '',
      href: '/',
      faIcon: faBookmark,
      submenuItems: [],
    },
    {
      label: '',
      href: '/user/profile',
      faIcon: faUser,
      submenuItems: [],
    },
  ];

  const output = links.map((link, lKey) => {
    return (
      <Link
        key={lKey}
        to={link.href}
        style={props.userPreferenceStyles.highlightColor}
      >
        <li
          className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}
          key={`li-${lKey}`}
          style={props.userPreferenceStyles.highlightColor}
        >
          <FontAwesomeIcon icon={link.faIcon} />
          {
            link.submenuItems.length ? (
              <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes.submenu}`}>
                {
                  link.submenuItems.map((submenuItem, smKey) => {
                    return (
                      <li
                        key={smKey}
                        className={`${classes['list-group-item']} ${classes['pl-4']}`}
                      >
                        <Link to={submenuItem.href}>{submenuItem.label}</Link>
                        <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['sub-submenu']}`}>
                          {
                            submenuItem.subSubmenuItems.map((subSubmenuItem, ssmKey) => {
                              return (
                                <li
                                  key={ssmKey}
                                  className={`${classes['list-group-item']} ${classes['pl-4']}`}
                                >
                                  <Link to={subSubmenuItem.href}>{subSubmenuItem.label}</Link>
                                </li>
                              );
                            })
                          }
                        </ul>
                      </li>
                    );
                  })
                }
              </ul>
            ) : null
          }
        </li>
      </Link>
    );
  });

  return (
    <div data-component={'sidebar'}>
      <div className={`${classes.sidebar}`}>
        <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['first-menu']}`}>
          {output}
        </ul>
      </div>
    </div>
  );
}

SidebarMenu.propTypes = {
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(SidebarMenu));
