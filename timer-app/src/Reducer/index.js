 import counterReducer from './counter';
import loggedReducer from './loggedReducer';
 inmport isLogged from './isLogged';
 import {combineReducer} from 'redux';


 const allReducers = combineReducer({
     counter : counterReducer,
     isLogged: loggedReducer
 });


 export default allReducers