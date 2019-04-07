import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import radium, { Style } from 'radium';

import SidebarMenu from '../../../components/elements/SidebarMenu/SidebarMenu';

import classes from './MenuSidebarContainer.css';
import { getUserPreferenceStyles } from '../../../store/actions/globalStylesActions';
import { getTabData } from '../../../store/actions/tabDataActions';

class MenuSidebarContainer extends Component {

  constructor(props) {
    super(props);
    props.dispatch(getTabData());

    if (props.user) {
      props.dispatch(getUserPreferenceStyles(props.user));
    }
  }

  render() {
    let output;

    if (this.props.userPreferenceStyles) {
      output = (
        <div className={classes.PageContentsWrapper} style={this.props.userPreferenceStyles.background}>
          <div className={classes.PageContents}>
            {this.props.children}
          </div>
          <Style scopeSelector="body" rules={this.props.userPreferenceStyles.body} />
        </div>
      );
    }

    return (
      <div>
        <SidebarMenu />
        {output}
      </div>
    );
  }
}

MenuSidebarContainer.propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func,
  tabData: PropTypes.object,
  user: PropTypes.object,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    userPreferenceStyles: state.styles.userPreferenceStyles,
    tabData: state.tabData.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUserPreferenceStyles,
    getTabData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(radium(MenuSidebarContainer));
