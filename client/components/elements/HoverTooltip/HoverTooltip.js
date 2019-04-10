import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Tooltip } from 'reactstrap';

class HoverTooltip extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <span id={this.props.tooltipId}>{this.props.children}</span>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={this.props.tooltipId} toggle={this.toggle}>
          {this.props.helpText}
        </Tooltip>
      </div>
    );
  }
}

HoverTooltip.propTypes = {
  children: PropTypes.any.isRequired,
  helpText: PropTypes.string.isRequired,
  tooltipId: PropTypes.string.isRequired,
};

export default HoverTooltip;
