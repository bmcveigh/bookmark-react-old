import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

import BookmarkAddSpaceForm from '../../../components/forms/BookmarkAddSpaceForm/BookmarkAddSpaceForm';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/Tabs/Tabs';
import AppModal from '../../../components/containers/AppModal/AppModal';
import { updateUserById } from '../../../store/actions/UserActions';

const confirmHandler = (props, bookmarkSpaces, index) => {
  const user = props.user;

  // todo: add logic for confirm handler.
  bookmarkSpaces.splice(index);
  props.dispatch(updateUserById(user._id, user));
};

function BookmarkList(props) {
  const bkSpaceTabsData = props.user.bookmarkSpaces[0].map((space, index) => {
    return {
      label: space.name,
      href: index ? `/space/${index}` : '/',
    };
  });

  const params = props.params || {};
  const index = params.id || 0;
  const user = props.user || false;
  const bookmarkSpaces = user.bookmarkSpaces[0];

  return (
    <div>
      <BookmarkAddCategoryButton />
      <BookmarkAddSpaceForm />
      <Tabs data={bkSpaceTabsData} />
      {
        index > 0 ? (
          <Row className="float-right">
            <Col
              md={12}
            >
              <AppModal
                labelId="deleteThisSpace"
                confirmHandler={() => confirmHandler(props, bookmarkSpaces, index)}
              >
                <span>Are you sure you would like to delete this space?</span>
              </AppModal>
            </Col>
          </Row>
        ) : null
      }
      <BookmarkCategories space={bookmarkSpaces[index]} />
    </div>
  );
}

BookmarkList.propTypes = {
  dispatch: PropTypes.func,
  globalStyles: PropTypes.object,
  params: PropTypes.object,
  user: PropTypes.any, // .isRequired,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
