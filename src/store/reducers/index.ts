import { combineReducers } from 'redux';
import musicReducer from './musicReducer';

const rootReducer = combineReducers({
    musicData: musicReducer
});

export default rootReducer;
