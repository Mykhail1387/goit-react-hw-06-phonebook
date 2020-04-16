import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../contactAction';
import shortId from 'shortid';

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
}

export default createReducer(initialState, {
    [addContact]: (state, action) => {
        const searchSameName = state.contacts.map(cont => cont.name).includes(action.payload.name)
        if (searchSameName) {
            return state
        } else if (action.payload.name.length === 0) {
            return state
        }

        return {
            contacts: [
                {
                    id: shortId.generate(),
                    ...action.payload
                },
                ...state.contacts
            ]
        };
    },
    [deleteContact]: (state, action) => {
        return { contacts: state.contacts.filter(contact => contact.id !== action.payload) }
    }
});














//============================contactReducer до рефакторинга кода на Redux Tookit==================================================
// import { Type } from '../contactAction';
// import shortId from 'shortid';

// const initilState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]
// }

// const contactReducer = (state = initilState, action) => {

//     switch (action.type) {
//         case Type.ADD_CONTACT:
            // const searchSameName = state.contacts.map(cont => cont.name).includes(action.payload.name)
            // if (searchSameName) {
            //     return state
            // } else if (action.payload.name.length === 0) {
            //     return state
            // }

            // return {
            //     contacts: [
            //         {
            //             id: shortId.generate(),
            //             ...action.payload
            //         },
            //         ...state.contacts
            //     ]
            // };

//         case Type.DELETE_CONTACT:
            // return {
            //     contacts: state.contacts.filter(contact => contact.id !== action.payload.id)
            // };

//         default:
//             return state;
//     }
// }

// export default contactReducer;
