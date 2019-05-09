import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// Import Style
import styles from './Header.css';

import GoogleButton from '../../../User/components/GoogleButton/GoogleButton';

export function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><GoogleButton /></li>
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
