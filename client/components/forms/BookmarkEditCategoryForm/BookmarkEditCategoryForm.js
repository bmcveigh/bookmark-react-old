import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';
import { injectIntl } from 'react-intl';

class BookmarkEditCategoryForm extends Component {

  handleClick(e) {
    e.preventDefault();

    const user = this.props.user;

    this.props.dispatch(updateUserById(this.props.user._id, user));
  }

  render() {
    const category = this.props.category;

    return (
      <form>
        <div><label htmlFor="name">Category Name</label></div>
        <div>
          <input
            type="text"
            id="name"
            ref="name"
            defaultValue={category.name}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
        </div>
        <div>
          <input
            type="text"
            id="description"
            ref="description"
            defaultValue={category.description}
          />
        </div>
        <div><button onClick={(e) => this.handleClick(e)}>{this.props.intl.messages.update}</button></div>
      </form>
    );
  }

}

BookmarkEditCategoryForm.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  intl: PropTypes.object,
  user: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BookmarkEditCategoryForm));
