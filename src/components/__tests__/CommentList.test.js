import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  // intialize a static state since communicating with the CommentBox
  // would be more work
  const initialState = {
    comments: ['first comment', 'second comment'],
  };

  // mount the component and pass the initial state to the Provider Root
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one li per comment', () => {
  // check for the length of lis
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  // checks if the component for the content
  // .render returns a Cheerio wrapper that you can use like jQuery
  expect(wrapped.render().text()).toContain('first comment')
  expect(wrapped.render().text()).toContain('second comment')
});
