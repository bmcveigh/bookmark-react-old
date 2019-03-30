import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Components
import BookmarkList from '../../components/BookmarkList';
import BookmarkAddCategoryForm from '../../../../components/forms/BookmarkAddCategoryForm/BookmarkAddCategoryForm';
import MenuSidebarPage from '../MenuSidebarPage/MenuSidebarPage';

function BookmarkListPage(props) {
  let addForm;

  if (props.bookmarks.shouldDisplayBookmark) {
    addForm = <BookmarkAddCategoryForm />;
  }

  return (
    <MenuSidebarPage>
      <BookmarkList user={props.user} />
      {addForm}
    </MenuSidebarPage>
  );
}

BookmarkListPage.propTypes = {
  bookmarks: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
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

export default connect(mapStateToProps)(BookmarkListPage);
