import { ADD_POST, ADD_POSTS, DELETE_POST, TOGGLE_BOOKMARK_CATEGORY_FORM } from '../actions/BookmarkActions';

// Initial State
const initialState = { data: [], shouldDisplayBookmark: false };

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.bookmarks,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case TOGGLE_BOOKMARK_CATEGORY_FORM:
      return {
        ...state,
        shouldDisplayBookmark: !state.shouldDisplayBookmark,
      };

    default:
      return state;
  }
};

// Export Reducer
export default BookmarkReducer;
