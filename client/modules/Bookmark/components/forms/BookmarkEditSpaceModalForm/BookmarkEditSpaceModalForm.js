import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, FormGroup } from 'reactstrap';
import { updateUserById } from '../../../../../store/actions/UserActions';
import AppModal from '../../../../../components/containers/AppModal/AppModal';

class BookmarkEditSpaceModalForm extends Component {
  confirmHandler() {
    // Add a space when user clicks "Done" button.
    const updatedUser = this.props.user;
    updatedUser.bookmarkSpaces[0][this.props.index].name = this.refs.spaceName.value;
    updatedUser.bookmarkSpaces[0][this.props.index].description = this.refs.spaceDescription.value;

    this.props.dispatch(updateUserById(updatedUser._id, updatedUser));
  }

  render() {
    return (
      <AppModal
        labelId="spaceSettings"
        confirmHandler={() => this.confirmHandler(this.refs)}
        title="Space Settings"
      >
        <Form>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Name"
              ref="spaceName"
              defaultValue={this.props.space.name}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Description"
              ref="spaceDescription"
              defaultValue={this.props.space.description}
            />
          </FormGroup>
        </Form>
      </AppModal>
    );
  }
}

BookmarkEditSpaceModalForm.propTypes = {
  dispatch: PropTypes.func,
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  space: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkEditSpaceModalForm);
