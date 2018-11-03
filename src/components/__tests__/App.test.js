import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


it('shows a comment box', () => {
  const div = document.createElement('div'); // create a new div
  ReactDOM.render('<App />', div); // put the component into the new div
  ReactDOM.unmountComponentAtNode(div); // remove the div
});
