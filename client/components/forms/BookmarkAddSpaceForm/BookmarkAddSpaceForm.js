import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, FormGroup } from 'reactstrap';
import AppModal from '../../containers/AppModal/AppModal';
import { updateUserById } from '../../../store/actions/UserActions';


class BookmarkAddSpaceForm extends Component {
  confirmHandler() {
    // Add a space when user clicks "Done" button.
    const updatedUser = this.props.user;
    updatedUser.bookmarkSpaces[0].push({
      bookmarkCategories: [],
      description: this.refs.spaceDescription.value,
      name: this.refs.spaceName.value,
    });

    this.props.dispatch(updateUserById(updatedUser._id, updatedUser));
  }

  render() {
    return (
      <AppModal
        buttonLabel="Add Space"
        confirmHandler={() => this.confirmHandler(this.refs)}
        title="Add Space"
      >
        <Form>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Name"
              ref="spaceName"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Description"
              ref="spaceDescription"
            />
          </FormGroup>
        </Form>
      </AppModal>
    );
  }
}

BookmarkAddSpaceForm.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddSpaceForm);
