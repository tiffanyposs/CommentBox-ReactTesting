import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); // stops all requests going out
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1'},
      { name: 'Fetched #2'}
    ]
  }); // select what url you want to fake, then create new data
});

afterEach(() => {
  moxios.uninstall(); // don't reuse the stubRequest somewhere else
});

// pass the done param as a cb
// done() prevents the test from ending until you tell it to end in the code
// this is helpful for times you need to delay code with wait
it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetchComments button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a tiny pause to wait for fake data
  moxios.wait(() => {
    // update the rendering
    wrapped.update();
    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    // this test is complete (manually finish)
    done();
    // clean up component (remove it from virtual DOM)
    wrapped.unmount();
  });

});
