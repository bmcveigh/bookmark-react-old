import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SidebarMenu from '../../../components/elements/SidebarMenu/SidebarMenu';

import classes from './MenuSidebarContainer.css';
import { getTabData } from '../../../store/actions/tabDataActions';

class MenuSidebarContainer extends Component {

  constructor(props, context) {
    super(props, context);
    this.props.dispatch(getTabData());
  }

  render() {
    return (
      <div>
        <SidebarMenu />
        <div className={classes.PageContents}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

MenuSidebarContainer.propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func,
  tabData: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    tabData: state.tabData.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getTabData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSidebarContainer);
