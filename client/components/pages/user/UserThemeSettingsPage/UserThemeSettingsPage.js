import React from 'react';
import MenuSidebarPage from '../../../../modules/Bookmark/pages/MenuSidebarPage/MenuSidebarPage';
import UserThemeSettingsForm from '../../../forms/UserThemeSettingsForm/UserThemeSettingsForm';

function UserThemeSettingsPage() {
  return (
    <div>
      <MenuSidebarPage>
        <UserThemeSettingsForm />
      </MenuSidebarPage>
    </div>
  );
}

export default UserThemeSettingsPage;
