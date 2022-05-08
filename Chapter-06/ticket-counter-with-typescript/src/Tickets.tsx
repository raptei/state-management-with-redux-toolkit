import React from 'react';
import { useAppSelector, useAppDispatch } from './Hooks';
import { addTicketCount, removeTicketCount } from './TicketsSlice';

export function Tickets() {
    const count = useAppSelector((state: any) => state.ticket.value);

    const dispatch = useAppDispatch();

    return (
        <div style={{ padding: '100px' }}>
            <h1>Movie Tickets</h1>
            <table>
                <thead>
                    <tr>
                        <th>Movie Name</th>
                        <th>Add</th>
                        <th>Remove</th>
                        <th>Total Tickets:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>K.G.F: Chapter 2</td>
                        <td> <button style={{ background: 'Green' }}
                            aria-label="Add Tickets"
                            onClick={() => dispatch(addTicketCount())}><span style={{ fontSize: "30px" }}>+</span></button>
                        </td>
                        <td>
                            <button style={{ background: 'Red' }}
                                aria-label="Remove Ticket"
                                onClick={() => dispatch(removeTicketCount())}><span style={{ fontSize: "30px" }}>-</span></button>
                        </td>
                        <td>{count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}