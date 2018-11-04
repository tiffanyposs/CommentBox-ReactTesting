import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  const wrapped = shallow(<App />); // component might be a better name

  // checks for 1 CommentBox component
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
