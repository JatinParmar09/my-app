// // store.js

import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // If you plan to make asynchronous actions
import rootReducer from './rootReducer';

const store = createStore(rootReducer,);

export default store;
// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {}
//   })
// }