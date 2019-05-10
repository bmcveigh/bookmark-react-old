import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateUserById } from '../../../../../store/actions/UserActions';

import Button from '../../../../../components/elements/Button/Button';

class BookmarkCloneSpaceButton extends Component {
  handleClick() {
    const updatedUser = this.props.user;
    const spaceToClone = this.props.spaceToClone;
    spaceToClone.name = `Clone of ${spaceToClone.name}`;
    updatedUser.bookmarkSpaces[0].push(spaceToClone);
    console.log(spaceToClone);

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
