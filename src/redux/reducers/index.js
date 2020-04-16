import { combineReducers } from 'redux';

import contactReducer from '../reducers/contactReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer

})

export default rootReducer;