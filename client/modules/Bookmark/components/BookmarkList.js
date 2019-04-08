import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

import BookmarkAddSpaceForm from '../../../components/forms/BookmarkAddSpaceForm/BookmarkAddSpaceForm';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/Tabs/Tabs';
import AppModal from '../../../components/containers/AppModal/AppModal';

function BookmarkList(props) {
  const bkSpaceTabsData = props.user.bookmarkSpaces[0].map((space, index) => {
    return {
      label: space.name,
      href: index ? `/space/${index}` : '/',
    };
  });

  const params = props.params || {};
  const index = params.id || 0;

  return (
    <div>
      <BookmarkAddCategoryButton />
      <BookmarkAddSpaceForm />
      <Tabs data={bkSpaceTabsData} />
      {
        props.user.bookmarkSpaces.map((bookmarkSpace, key) => {
          return (
            <div key={key}>
              <Row className="float-right">
                <Col
                  md={12}
                >
                  <AppModal
                    labelId="deleteThisSpace"
                    confirmHandler={null}
                  >
                    <span>Are you sure you would like to delete this space?</span>
                  </AppModal>
                </Col>
              </Row>
              <BookmarkCategories space={bookmarkSpace[index]} />
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
