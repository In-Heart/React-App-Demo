import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import objectAssign from 'object-assign';

const appReducer = combineReducers({
  routing,
});
const initialState = appReducer({}, {});

const rootReducre = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(objectAssign({}, state, initialState), action);
  }
  return appReducer(state, action);
};

export default rootReducre;
