import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducers/contactReducer';
import filter from './reducers/filterReducer';


const store = configureStore({
    reducer: {
        contacts,
        filter
    }
})

export default store;











//==============================store до рефакторинга кода на Redux Tookit==================================================

// import { createStore } from 'redux';
// import rootReducer from './reducers/index'


// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(rootReducer, devToolsEnhancer())

// export default store;