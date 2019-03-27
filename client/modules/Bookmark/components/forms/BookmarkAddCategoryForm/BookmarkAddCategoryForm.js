import React from 'react';

function BookmarkAddCategoryForm(props) {
  return (
    <form>
      <div><label htmlFor="name">Category Name</label></div>
      <div><input type="text" id="name" /></div>

      <div><label htmlFor="description">Description</label></div>
      <div><input type="text" id="description" /></div>
    </form>
  );
}

export default BookmarkAddCategoryForm;
