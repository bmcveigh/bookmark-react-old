import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateUserById } from '../../../../../store/actions/UserActions';

import Button from '../../../../../components/elements/Button/Button';

class BookmarkCloneSpaceButton extends Component {
  handleClick() {
    const updatedUser = this.props.user;

    // Create a new object by value and not by reference.
    const spaceToClone = {};
    for (const key of Object.keys(this.props.spaceToClone)) {
      spaceToClone[key] = this.props.spaceToClone[key];
    }

    spaceToClone.name = `Clone of ${spaceToClone.name}`;
    updatedUser.bookmarkSpaces[0].push(spaceToClone);

    this.props.dispatch(updateUserById(updatedUser._id, updatedUser));
  }

  render() {
    return (
      <Button
        click={() => this.handleClick()}
        labelId="cloneSpace"
      />
    );
  }
}

BookmarkCloneSpaceButton.propTypes = {
  dispatch: PropTypes.func,
  spaceToClone: PropTypes.object.isRequired,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkCloneSpaceButton);
