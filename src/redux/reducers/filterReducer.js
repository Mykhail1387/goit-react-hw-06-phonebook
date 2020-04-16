import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from '../contactAction';

export default createReducer('', {
    [filterContact]: (state, action) => action.payload,
});










//==============================filterReducer до рефакторинга кода на Redux Tookit==================================================
// import { Type } from '../contactAction';

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case Type.FILTER_CONTACT:
//             return action.payload

//         default:
//             return state;
//     }
// }

// export default filterReducer;