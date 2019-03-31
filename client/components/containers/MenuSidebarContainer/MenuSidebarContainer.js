import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../../../components/elements/SidebarMenu/SidebarMenu';

import classes from './MenuSidebarContainer.css';

function MenuSidebarContainer(props) {
  return (
    <div>
      <SidebarMenu />
      <div className={classes.PageContents}>
        {props.children}
      </div>
    </div>
  );
}

MenuSidebarContainer.propTypes = {
  children: PropTypes.any,
};

export default MenuSidebarContainer;
