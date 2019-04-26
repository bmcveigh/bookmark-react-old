import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import { Link } from 'react-router';

export function Header() {
  const linkData = [
    {
      href: '/membership',
      label: 'Membership',
    },
    {
      href: '#',
      label: 'Logout',
    },
  ];

  const navItems = linkData.map(
    (link, index) => <li key={index}><Link to={link.href}>{link.label}</Link></li>
  );

  return (
    <div className={styles.Header}>
      <div className={styles['language-switcher']}>
        <ul>
          {navItems}
        </ul>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
