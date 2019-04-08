import React, { Component } from 'react';

import { Form, FormGroup } from 'reactstrap';
import AppModal from '../../containers/AppModal/AppModal';


class BookmarkAddSpaceForm extends Component {
  confirmHandler() {
    // todo: add a space when user clicks "Done" button.
  }

  render() {
    return (
      <AppModal
        buttonLabel="Add Space"
        confirmHandler={() => this.confirmHandler(this.refs)}
        title="Add Space"
      >
        <Form>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Name"
              ref="spaceName"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Description"
              ref="spaceDescription"
            />
          </FormGroup>
        </Form>
      </AppModal>
    );
  }
}

export default BookmarkAddSpaceForm;
