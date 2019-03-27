import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import Components
import BookmarkList from '../../components/BookmarkList';

function BookmarkListPage(props) {
  return (
    <div>
      <BookmarkList user={props.user} />
    </div>
  );
}

BookmarkListPage.propTypes = {
  user: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
};

BookmarkListPage.contextTypes = {
  router: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkListPage);
