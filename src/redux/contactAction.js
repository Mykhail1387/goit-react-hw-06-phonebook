import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterContact = createAction('FILTER_CONTACT');









//=============================contactAction до рефакторинга кода на Redux Tookit==================================================

// export const Type = {
//     ADD_CONTACT: 'ADD_CONTACT',
//     DELETE_CONTACT: 'DELETE_CONTACT',
//     FILTER_CONTACT: 'FILTER_CONTACT',
// }


// export const addContact = (newContact) => ({
//     type: Type.ADD_CONTACT,
//     payload: {
//         name: newContact.name,
//         number: newContact.number
//     }
// })


// export const deleteContact = id => ({
//     type: Type.DELETE_CONTACT,
//     payload: { id }
// });


// export const filterContact = filter => ({
//     type: Type.FILTER_CONTACT,
//     payload: filter
// })