import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// Import Style
import styles from './Header.css';
import { Link } from 'react-router';

export function Header(props) {
  const linkData = [
    {
      href: '/membership',
      label: 'Membership',
    },
    {
      href: props.user._id ? '/user/logout' : '/user/login',
      label: props.user._id ? 'Logout' : 'Login',
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
  user: PropTypes.object,
};

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

export default connect(mapStateToProps)(Header);
