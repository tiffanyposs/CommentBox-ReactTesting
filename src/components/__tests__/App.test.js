import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; // global variable

// beforeEach runs before each it block
// this is good for DRY code
beforeEach(() => {
  wrapped = shallow(<App />); // component might be a better name
});

// run this after each test
afterEach(() => {
  wrapped.unmount();
});

it('shows a comment box', () => {
  // checks for 1 CommentBox component
  expect(wrapped.find(CommentBox).length).toEqual(1);
});


it('shows a comment list', () => {
  // check for 1 CommentList component
  expect(wrapped.find(CommentList).length).toEqual(1);
});
