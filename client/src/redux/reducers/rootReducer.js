import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { questionsReducer } from './questionsReducer';

export const rootReducer = combineReducers({
    usersReducer,
    questionsReducer
});
