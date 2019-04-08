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

  render() {
    return (
      <span>
        <CustomButton
          labelId="addSpace"
          click={this.toggle}
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader
            className={classes.ModalHeader}
            toggle={this.toggle}
          >
            {this.props.title}</ModalHeader>
          <ModalBody className={classes.ModalBody}>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(event) => this.toggle(event, true)}>Done</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </span>
    );
  }
}

AppModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  confirmHandler: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default AppModal;
