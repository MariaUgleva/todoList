import {combineReducers} from 'redux';
import startState from './state';

const allReducers = combineReducers ({
    notes: startState,
});

export default allReducers;

