import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

// component
let wrapped;

// run this before each test
beforeEach(() => {
  wrapped = mount(<CommentBox />); // create a full dom render of Comment Box component
})

// run this after each test
afterEach(() => {
  wrapped.unmount(); // un mount after each test to start a clean slate
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1); // check for a textarea
  expect(wrapped.find('button').length).toEqual(1); // check for a button
});

it('has a textarea that users can type in', () => {

  // simulate a change event, add fake data onto the event to simulate a text update
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  // for component to rerender so we don't have to wait for the React queue
  wrapped.update();

  // use the .prop method to pull the property we want to check
  // using this method of checking the prop instead of the actual value or
  // text in the textarea box
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
