// Imports: Dependencies
import { combineReducers } from 'redux';
import { RESET } from '../actions/type';

// Imports: Reducers
import counterReducer from './counterReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

const initialState = rootReducer({}, {});

// Exports
export default (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return rootReducer(state, action)
}
