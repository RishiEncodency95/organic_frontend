import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './slices/eventSlice';
import registrationReducer from './slices/registrationSlice';

export const store = configureStore({
    reducer: {
        events: eventReducer,
        registration: registrationReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
