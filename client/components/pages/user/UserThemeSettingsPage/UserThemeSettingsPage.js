import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserThemeSettingsForm from '../../../forms/UserThemeSettingsForm/UserThemeSettingsForm';
import MenuSidebarContainer from '../../../containers/MenuSidebarContainer/MenuSidebarContainer';
import Tabs from '../../../elements/sierra/Tabs/Tabs';

function UserThemeSettingsPage(props) {
  return (
    <div>
      <MenuSidebarContainer>
        {typeof props.tabData !== 'undefined' ? <Tabs data={props.tabData} /> : null}
        <UserThemeSettingsForm />
      </MenuSidebarContainer>
    </div>
  );
}

UserThemeSettingsPage.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return {
    tabData: state.tabData.data.userProfile,
  };
}

export default connect(mapStateToProps)(UserThemeSettingsPage);
