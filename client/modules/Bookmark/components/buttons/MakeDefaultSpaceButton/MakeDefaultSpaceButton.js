import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '../../../../../components/elements/Button/Button';

class MakeDefaultSpaceButton extends Component {
  handleClick() {
    // const spaceIndex = this.props.spaceIndex;
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
  spaceIndex: PropTypes.string.isRequired,
};

export default MakeDefaultSpaceButton;
