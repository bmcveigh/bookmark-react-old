import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../../../components/elements/Button/Button';
import { updateUserById } from '../../../../../store/actions/UserActions';

class MakeDefaultSpaceButton extends Component {
  handleClick() {
    const user = this.props.user;
    const spaceIndex = this.props.spaceIndex;
    const space = user.bookmarkSpaces[0][spaceIndex];

    const spaces = [space];
    user.bookmarkSpaces[0].forEach((s, index) => {
      if (s.name !== space.name) {
        spaces.push(s);
      }
    });
    user.bookmarkSpaces[0] = spaces;

    this.props.dispatch(updateUserById(user._id, user));
  }

  render() {
    return (
      <Button
        click={() => this.handleClick()}
        labelId="makeDefaultSpace"
      />
    );
  }
}

MakeDefaultSpaceButton.propTypes = {
  dispatch: PropTypes.func,
  spaceIndex: PropTypes.string.isRequired,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(MakeDefaultSpaceButton);
