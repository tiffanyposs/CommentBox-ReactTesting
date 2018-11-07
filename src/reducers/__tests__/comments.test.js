import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  // create fake action
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  // call reducer with initial state and the action
  const newState = commentsReducer([], action);

  // check if it updated as intended
  expect(newState).toEqual(['new comment'])
});

it('handles action with unknown type', () => {
  // try passing in an unknown type
  const newState = commentsReducer([], { type: 'SOME_UNKNOWN_TYPE' });
  // should equal the initial state
  expect(newState).toEqual([]);
});
