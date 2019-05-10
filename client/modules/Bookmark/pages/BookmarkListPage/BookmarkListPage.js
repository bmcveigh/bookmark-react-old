import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Components
import BookmarkCategoriesContainer from '../../components/BookmarkCategoriesContainer';
import MenuSidebarContainer from '../../../../components/containers/MenuSidebarContainer/MenuSidebarContainer';
import { setParams } from '../../../../store/actions/routeParamsActions';

class BookmarkListPage extends Component {
  constructor(props) {
    super(props);
    props.dispatch(setParams(props.params));
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params) {
      this.props.dispatch(setParams(nextProps.params));
    }
  }

  render() {
    return (
      <MenuSidebarContainer>
        <BookmarkCategoriesContainer params={this.props.params} />
      </MenuSidebarContainer>
    );
  }
}

BookmarkListPage.propTypes = {
  bookmarks: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
  user: PropTypes.any.isRequired,
  shouldDisplayBookmark: PropTypes.bool,
};

BookmarkListPage.contextTypes = {
  router: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setParams,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkListPage);
