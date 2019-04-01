import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuSidebarContainer from '../../../../components/containers/MenuSidebarContainer/MenuSidebarContainer';
import Tabs from '../../../../components/elements/sierra/Tabs/Tabs';
import { getTabData } from '../../../../store/actions/tabDataActions';

function UserProfilePage(props) {
  const user = props.user;

  return (
    <MenuSidebarContainer>
      <Tabs data={props.tabData.data.userProfile} />
      <div>
        <div>{user.username}</div>
        <div>{user.email}</div>
      </div>
    </MenuSidebarContainer>
  );
}

UserProfilePage.propTypes = {
  dispatch: PropTypes.func,
  tabData: PropTypes.object,
  user: PropTypes.any.isRequired,
  shouldDisplayBookmark: PropTypes.bool,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getTabData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
