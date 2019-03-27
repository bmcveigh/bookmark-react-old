import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Components
import BookmarkList from '../../components/BookmarkList';
import BookmarkAddCategoryForm from '../../components/forms/BookmarkAddCategoryForm/BookmarkAddCategoryForm';

function BookmarkListPage(props) {
  let addForm;

  if (props.bookmarks.shouldDisplayBookmark) {
    addForm = <BookmarkAddCategoryForm />;
  }

  return (
    <div>
      <BookmarkList user={props.user} />
      {addForm}
    </div>
  );
}

BookmarkListPage.propTypes = {
  user: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  shouldDisplayBookmark: PropTypes.bool.isRequired,
};

BookmarkListPage.contextTypes = {
  router: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BookmarkListPage);
