import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

import {
  Form,
  FormGroup,
} from 'reactstrap';

import AppModal from '../../../../../components/containers/AppModal/AppModal';
import Label from 'reactstrap/es/Label';


class BookmarkMetadataModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <span>
        <a
          href="#"
          className="text-warning"
          onClick={(e) => this.handleClick(e)}
        >
          <FontAwesomeIcon
            icon={faStickyNote}
            size="2x"
          />
        </a>
        <AppModal
          confirmHandler={this.handleClick}
          includeButton={false}
          isOpen={this.state.modal}
          title={`Notes for ${this.props.bookmark.label || 'Untitled Bookmark'}`}
        >
          <Form>
            <FormGroup>
              <Label>Notes</Label>
              <textarea className="form-control" />
            </FormGroup>
          </Form>
        </AppModal>
      </span>
    );
  }
}

BookmarkMetadataModalForm.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default BookmarkMetadataModalForm;
