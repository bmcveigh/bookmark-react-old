import React, { Component } from 'react';
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

class BookmarkCategoriesContainer extends Component {
  render() {
    const bkSpaceTabsData = this.props.user.bookmarkSpaces[0].map((space, index) => {
      return {
        label: space.name,
        href: index ? `/space/${index}` : '/',
      };
    });

    const params = this.props.routeParams || {};
    const index = params.id || 0;
    const user = this.props.user || false;
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
                  confirmHandler={() => confirmHandler(this.props, bookmarkSpaces, index)}
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
}

BookmarkCategoriesContainer.propTypes = {
  dispatch: PropTypes.func,
  globalStyles: PropTypes.object,
  params: PropTypes.object,
  routeParams: PropTypes.object,
  user: PropTypes.any, // .isRequired,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    routeParams: state.routeParams,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkCategoriesContainer);
