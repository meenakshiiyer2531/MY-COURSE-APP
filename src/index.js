import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './Reducers';


const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
