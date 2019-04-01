import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuSidebarContainer from '../../../../components/containers/MenuSidebarContainer/MenuSidebarContainer';
import Tabs from '../../../../components/elements/sierra/Tabs/Tabs';

const tabData = [
  {
    href: '/user/profile',
    label: 'My Profile',
    isSelected: true,
  },
  {
    href: '/user/profile/appearance',
    label: 'Customize Appearance',
    isSelected: false,
  },
];

function UserProfilePage(props) {
  const user = props.user;
  return (
    <MenuSidebarContainer>
      <Tabs data={tabData} />
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
