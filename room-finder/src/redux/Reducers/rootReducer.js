import { combineReducers } from 'redux';
import {lodge} from './lodgeR';

export const rootReducer = combineReducers({
   AllLodge:lodge,
});

