import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Form } from 'reactstrap';

import { updateUserById } from '../../../../../store/actions/UserActions';
import AppModal from '../../../../../components/containers/AppModal/AppModal';

class BookmarkAddCategoryModalForm extends React.Component {

  handleClick() {
    const user = this.props.user;

    const params = this.props.params || {};
    const index = params.id || 0;

    // todo: fine tune this.
    user.bookmarkSpaces[0][index].bookmarkCategories.push({
      name: this.refs.name.value,
      description: this.refs.description.value,
      bookmarks: [],
      categoryId: Math.random().toString(36).substring(7),
    });

    this.props.dispatch(updateUserById(this.props.user._id, user));
  }

  render() {
    return (
      <AppModal
        labelId="addCategory"
        confirmHandler={() => this.handleClick()}
      >
        <Form>
          <div><label htmlFor="name">Category Name</label></div>
          <div>
            <input
              type="text"
              className="form-control"
              id="name"
              ref="name"
            />
          </div>

          <div><label htmlFor="description">Description</label></div>
          <div>
            <input
              type="text"
              className="form-control"
              id="description"
              ref="description"
            />
          </div>
        </Form>
      </AppModal>
    );
  }

}

BookmarkAddCategoryModalForm.propTypes = {
  params: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddCategoryModalForm);
