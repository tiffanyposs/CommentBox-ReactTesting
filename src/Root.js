import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// allows to export store to both tests and actual app
export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  )
}
