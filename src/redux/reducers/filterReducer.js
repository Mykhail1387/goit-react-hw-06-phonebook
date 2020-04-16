import { Type } from '../contactAction';

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case Type.FILTER_CONTACT:
            return action.payload

        default:
            return state;
    }
}

export default filterReducer;