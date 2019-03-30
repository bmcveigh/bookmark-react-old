import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../../../../components/elements/SidebarMenu/SidebarMenu';

import classes from './MenuSidebarPage.css';

function MenuSidebarPage(props) {
  return (
    <div>
      <SidebarMenu />
      <div className={classes.PageContents}>
        {props.children}
      </div>
    </div>
  );
}

MenuSidebarPage.propTypes = {
  children: PropTypes.any,
};

export default MenuSidebarPage;
