import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuSidebarPage from '../MenuSidebarPage/MenuSidebarPage';

function UserProfilePage(props) {
  const user = props.user;

  return (
    <MenuSidebarPage>
      <div>
        <div>{user.username}</div>
        <div>{user.email}</div>
      </div>
    </MenuSidebarPage>
  );
}

UserProfilePage.propTypes = {
  user: PropTypes.any.isRequired,
  shouldDisplayBookmark: PropTypes.bool,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserProfilePage);
