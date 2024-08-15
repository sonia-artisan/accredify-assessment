import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import personalUserReducer from './personalUserSlice';
import toggleReducer from './toggleSlice';
import careerGoalReducer from './CareerGoalSlice'; 

export const store = configureStore({
	reducer: {
		user: userReducer,
		personalUser: personalUserReducer,
		userType: toggleReducer,
		careerGoal: careerGoalReducer
	},
});
