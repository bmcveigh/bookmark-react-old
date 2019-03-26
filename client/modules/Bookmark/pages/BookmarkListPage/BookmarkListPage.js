import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import BookmarkList from '../../components/BookmarkList';
import BookmarkCreateWidget from '../../components/BookmarkCreateWidget/BookmarkCreateWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest } from '../../BookmarkActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts } from '../../BookmarkReducer';

class BookmarkListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <BookmarkList user={this.props.user} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
BookmarkListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
    user: state.user,
  };
}

BookmarkListPage.propTypes = {
  user: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
};

BookmarkListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(BookmarkListPage);
