import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './features/coursesSlice';
import studentDashboardReducer from './features/studentDashboardSlice';



// Combine reducers into a single root reducer
export const rootReducer = {
  courses: coursesReducer,
  studentDashboard: studentDashboardReducer,
};

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
});
