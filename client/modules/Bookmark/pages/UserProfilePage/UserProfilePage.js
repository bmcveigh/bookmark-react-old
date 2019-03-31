import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuSidebarContainer from '../../../../components/containers/MenuSidebarContainer/MenuSidebarContainer';

function UserProfilePage(props) {
  const user = props.user;

  return (
    <MenuSidebarContainer>
      <div>
        <div>{user.username}</div>
        <div>{user.email}</div>
      </div>
    </MenuSidebarContainer>
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
