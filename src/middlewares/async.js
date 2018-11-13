export default ({ dispatch }) => next => action => {
		// CHECK TO SEE IF THE ACTION HAS A PROMISE ON IT'S PAYLOAD PROPERTY
		// IF SO WAIT FOR IT TO RESOLVE
		// IF IT DOESN'T SEND IT TO THE NEXT MIDDLEWARE
		debugger;
		// if it's not a promise or payload doesn't exist
		// pass it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}

		// if there is a promise wait for it to resolve
		// then create and dispatch a new action
		action.payload.then(function(response) {
			const newAction = { ...action, payload: response };
			return dispatch(newAction);
		});
}

// BOILERPLATE BASIC VERSION

// export default function({ dispatch }) {
// 	return function(next) {
// 		return function(action) {
//
// 		}
// 	}
// }

// ES6 VERSION

// export default ({ dispatch }) =>
// 	 next =>
// 		action => {
//
// 		}
//

// SHORTER ES6 VERSION

// export default ({ dispatch }) => next => action => {
//
// }
