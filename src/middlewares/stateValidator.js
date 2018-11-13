import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

// this middleware warns the developer of data in the wrong format
export default ({ dispatch, getState }) => next => action => {
  // pass the action on because we want to validate at the end
  next(action);

  // this happens after everything else happens in the redux store
  const isValid = tv4.validate(getState(), stateSchema);
  if (!isValid) console.warn("Invalid State Schema Detected");
}
