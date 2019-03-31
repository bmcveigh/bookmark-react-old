import React from 'react';

import UserThemeSettingsForm from '../../../forms/UserThemeSettingsForm/UserThemeSettingsForm';
import MenuSidebarContainer from '../../../containers/MenuSidebarContainer/MenuSidebarContainer';

function UserThemeSettingsPage() {
  return (
    <div>
      <MenuSidebarContainer>
        <UserThemeSettingsForm />
      </MenuSidebarContainer>
    </div>
  );
}

export default UserThemeSettingsPage;
