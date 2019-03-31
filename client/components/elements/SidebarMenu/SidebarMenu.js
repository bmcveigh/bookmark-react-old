import React from 'react';

import classes from './SidebarMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

function SidebarMenu() {
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
      submenuItems: [
        {
          label: 'My Profile',
          href: '/user/profile',
          subSubmenuItems: [
            {
              label: 'My Account',
              href: '/user/profile',
            },
            {
              label: 'Theme Settings',
              href: '/user/profile/appearance',
            },
          ],
        },
      ],
    },
  ];

  const output = links.map((link) => {
    return (
      <li className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}>
        <Link to={link.href}>
          <FontAwesomeIcon icon={link.faIcon} />
        </Link>
        <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes.submenu}`}>
          {
            link.submenuItems.map((submenuItem) => {
              return (
                <li className={`${classes['list-group-item']} ${classes['pl-4']}`}>
                  <Link to={submenuItem.href}>{submenuItem.label}</Link>
                  <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['sub-submenu']}`}>
                    {
                      submenuItem.subSubmenuItems.map((subSubmenuItem) => {
                        return (
                          <li className={`${classes['list-group-item']} ${classes['pl-4']}`}>
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
      </li>
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

export default SidebarMenu;
