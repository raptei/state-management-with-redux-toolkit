import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './TicketsSlice';
export const store = configureStore({
    reducer: {
        ticket: ticketsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
