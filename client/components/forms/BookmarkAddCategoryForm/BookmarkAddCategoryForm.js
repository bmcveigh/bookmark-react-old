import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';

class BookmarkAddCategoryForm extends React.Component {

  handleClick(e) {
    e.preventDefault();

    const user = this.props.user;

    // todo: fine tune this.
    user.bookmarkSpaces[0][0].bookmarkCategories.push({
      name: this.refs.name.value,
      description: this.refs.description.value,
      bookmarks: [],
      categoryId: Math.random().toString(36).substring(7),
    });

    this.props.dispatch(updateUserById(this.props.user._id, user));
  }

  render() {
    return (
      <form>
        <div><label htmlFor="name">Category Name</label></div>
        <div><input type="text" id="name" ref="name" /></div>

        <div><label htmlFor="description">Description</label></div>
        <div><input type="text" id="description" ref="description" /></div>
        <div><button onClick={(e) => this.handleClick(e)}>Done</button></div>
      </form>
    );
  }

}

BookmarkAddCategoryForm.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddCategoryForm);
