import { createSlice } from '@reduxjs/toolkit';

interface TicketsState {
    value: number
};

const initialState: TicketsState = {
    value: 0,
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicketCount: (state) => {
            state.value += 1
        },
        removeTicketCount: (state) => {
            state.value -= 1
        },
    },
});

export const { addTicketCount, removeTicketCount } = ticketsSlice.actions;

export default ticketsSlice.reducer;