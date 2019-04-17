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
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <span>
        <span id={this.props.tooltipId}>{this.props.children}</span>
        <Tooltip placement={this.props.placement} isOpen={this.state.tooltipOpen} target={this.props.tooltipId} toggle={this.toggle}>
          {this.props.helpText}
        </Tooltip>
      </span>
    );
  }
}

HoverTooltip.propTypes = {
  children: PropTypes.any.isRequired,
  helpText: PropTypes.string.isRequired,
  placement: PropTypes.string,
  tooltipId: PropTypes.string.isRequired,
};

HoverTooltip.defaultProps = {
  placement: 'top',
};

export default HoverTooltip;
