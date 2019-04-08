import React from 'react';
import PropTypes from 'prop-types';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/Tabs/Tabs';

import { connect } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';

import AppModal from '../../../components/containers/AppModal/AppModal';

function BookmarkList(props) {
  if (!props.user.bookmarkSpaces) {
    return '';
  }

  const bkSpaceTabsData = props.user.bookmarkSpaces[0].map((space) => {
    return {
      label: space.name,
      href: window.location.pathname,
    };
  });

  const confirmHandler = () => {
    // todo: add a space.
  };

  return (
    <div>
      <BookmarkAddCategoryButton />
      <AppModal
        buttonLabel="Add Space"
        confirmHandler={confirmHandler}
        title="Add Space"
      >
        <Form>
          <FormGroup>
            <Input type="text" placeholder="Space Name" />
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Space Description" />
          </FormGroup>
        </Form>
      </AppModal>
      <Tabs data={bkSpaceTabsData} />
      {
        props.user.bookmarkSpaces.map((bookmarkSpace, key) => {
          return (
            <div key={key}>
              <BookmarkCategories space={bookmarkSpace[0]} />
            </div>
          );
        })
      }
    </div>
  );
}

BookmarkList.propTypes = {
  globalStyles: PropTypes.object,
  user: PropTypes.any, // .isRequired,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkList);
