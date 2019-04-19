import React from 'react';

import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomButton from '../../elements/Button/Button';

import classes from './AppModal.css';

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event, isConfirmed = false) {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));

    if (isConfirmed) {
      this.props.confirmHandler();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.includeButton === false) {
      this.setState({ modal: nextProps.isOpen });
    }
  }

  render() {
    return (
      <span>
        {
          this.props.includeButton === true ? (
            <CustomButton
              labelId={this.props.labelId}
              click={this.toggle}
            />
          ) : null
        }
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          className={this.props.className}
        >
          <ModalHeader
            className={classes.ModalHeader}
            toggle={() => this.toggle()}
          >
            {this.props.title}</ModalHeader>
          <ModalBody className={classes.ModalBody}>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(event) => this.toggle(event, true)}>Done</Button>{' '}
            <Button color="secondary" onClick={() => this.toggle(event, false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

AppModal.propTypes = {
  labelId: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  confirmHandler: PropTypes.func.isRequired,
  includeButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
};

AppModal.defaultProps = {
  includeButton: true,
  isOpen: false,
};

export default AppModal;
