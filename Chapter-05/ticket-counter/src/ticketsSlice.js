import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quantity: 0,
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicketCount: (state) => {
            state.quantity += 1
        },
        removeTicketCount: (state) => {
            state.quantity -= 1
        },
    },
});

export const { addTicketCount, removeTicketCount } = ticketsSlice.actions;

export default ticketsSlice.reducer;