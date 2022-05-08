# BEGINNER
**WHAT YOU'LL LEARN**

How to set up and use Redux Toolkit with React-Redux

**PREREQUISITES**

- Familiarity with ES6 syntax and features
Knowledge of React terminology: JSX, State, 
- Function Components, Props, and Hooks
- Understanding of Redux terms and concepts


# Redux
**What is the purpose of Redux?**

The purpose of Redux is to manage and centralize the application state.

## **Advantages of Redux**

**Predictable:** Redux helps you write applications that behave consistently.

**Centralized:** Centralizing you application state and logic.

**Debuggable:** The Redux DevTools make it easy to trace when, where, why and how your application's state changed.

**Flexible:** Redux work with any UI layer.

# Redux three fundamental principles
1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

**Single source of truth**
- The global state of your application is stored in an object tree within a single store.

**State is read-only**
- The only way to change the state is to emit an action, an object describing what happened.

**Changes are made with pure functions**
- To specify how the state tree is transformed by actions, you write pure reducers.

# React-Redux
**What is the purpose of React Redux?**

The purpose of React Redux is to allow react components to read data from the Redux Store and dispatch actions to the store to update data.

**Official:** Official React bindings for Redux.

**Predictable:** Designed to work with React's component model.

**Encapsulated**: Provides APIs that enable your components to interact with the Redux store.

**Optimized:** Automatically implements complex performance optimizations.

To use React Redux with your React app, install it as a dependency:
```bash
# If you use npm:
npm install react-redux

# Or if you use Yarn:
yarn add react-redux
```

# Redux Toolkit
**What is the purpose to Redux Toolkit?**
The Purpose of redux toolkit is to  Provides the utilities to simply common use cases like store setup, creating, reducers, immutable update logic and more.

## Creat react App
To create a project called `redux-toolkit-app`, run this command:

```bash
npx create-react-app redux-toolkit-app
```

## Install Redux Toolkit and React-Redux
- Add the Redux Toolkit and React-Redux packages to your project:

```bash
npm install @reduxjs/toolkit react-redux
```

# Create a Redux Store

**What is the Store?**

In Redux Terminology,the application's state lives in an object called the **store**. The store is created by passing in a reducer, and has a method called **getState** that returns the current state value.

**createStore:** A Redux API used to create a Redux store that holds the complete state tree of your app.


**configureStore:** 
1. A wrapper to the createStore which provides simplified configuration options.
2. It can automatically combine your slice reducers.
3. It includes redux-thunk middleware by default.
4. It automaticallu enables the Redux DevTools extension so that you can inspect the store while developing.

**Redux thunk:**
Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

Create a file named `store.js` inside the src folder.

Import the configureStore API from Redux Toolkit.

```Javascript
import { configureStore } from '@reduxjs/toolkit';
```

Create an empty Redux store for now, and export it.
```Javascript
export const store = configureStore({
    reducer: {},// empty redux store
});
```

**Complete code look like below**

```Javascript
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {},// empty redux store
});
```

# Provide the Redux Store to React
Import Provider Component from React-redux.
```Javascript
import { Provider } from 'react-redux';
```

Import Redux store which we have created.

```Javascript
import { store } from './store';
```
Put a React-Redux <Provider> component around your `<App />
`
```Javascript
    <Provider>
      <App />
    </Provider>
```
Pass the Redux store as `<Provider store={store}>`
```Javascript
 <Provider store={store}>
      <App />
    </Provider>
```
**Complete code looks like below**
```Javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

# Create a Redux State Slice
Create a file named **ticketSlice.js** inside `src` folder.

Import the configureStore API from Redux Toolkit.
```Javascript
import { createSlice } from '@reduxjs/toolkit'
```
**createSlice:** The API which automatically generates action creators and action types that correspond to the reducers and state.

**Creating a slice requires following inputs**
- A string name to identify the slice.
- An initial state value.
- And one or more reducer functions to define how the state can be updated. 

```Javascript
export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState,
    reducers: {
    }, // empty reducers
});
```
**What are reducers?**

In Redux Terminology, A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

Implement addTicketAction reducer to add ticket count.

```Javascript
        addTicketAction: (state) => {
            state.value += 1
        },
```

Implement removeTicketAction reducer to remove ticket count.

```Javascript
       removeTicketAction: (state) => {
            state.value -= 1
        },
```

**Note:** Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes.

Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

```Javascript
export const { addTicketAction, removeTicketAction } = ticketSlice.actions
```

**Complete Code looks like below**
```Javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const ticketSlice = createSlice({
    name: 'tickets', 
    initialState,
    reducers: {
        addTicketAction: (state) => {
            state.value += 1
        },
        removeTicketAction: (state) => {
            state.value -= 1
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTicketAction, removeTicketAction } = ticketSlice.actions

export default ticketSlice.reducer
```

# Add Slice Reducers to the Store
Import the reducer function from the ticket slice and add it to our store. 

```Javascript
import ticketReducer from './ticketSlice';
```
Add it to our store
```Javascript
 reducer: {
        ticket: ticketReducer,
    },
```

By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

**Complete Code looks like**
```Javascript
import { configureStore } from '@reduxjs/toolkit'

import ticketReducer from './ticketSlice';

export const store = configureStore({
    reducer: {
        ticket: ticketReducer,
    },
});
```

# Use Redux State and Actions in React Component
Create a `Ticket.js` file with a` <Ticket>` component inside `src` folder.

Create an empty **Ticket** React function Component and export it.

```Javascript
import React from 'react';

export function Ticket() {
}
```
Import **useSelector**, **useDispatch** API's from React-Redux package.

```Javascript
import { useSelector, useDispatch } from 'react-redux';
```
**useSelector:** The custom hook which allows us to read a values from the store state and subscribes to updates.

The following code Read's the ticket value from the store state.

```Javascript
 const count = useSelector((state) => state.ticket.value)
```
**What is the Dispatch?**

In Redux Terminology, The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value.

**useDispatch:** The Custom hook which return's the store's `dispatch` method to let you dispatch actions to set the value in the store.

```Javascript
const dispatch = useDispatch();
```

Import **addTicketAction**, **removeTicketAction** actions from the ticket slice.

```Javascript
import { addTicketAction, removeTicketAction } from './ticketSlice';
```

Create a clickable button for Addin the tickets using HTML5 `<button>` tag, and on the click event dispatch the **addTicketAction** action method.

```Javascript
      <button
          aria-label="Increment value"
          onClick={() => dispatch(addTicketAction())}
        >
          Increment
      </button>
```

Create a clickable button for removing the tickets using HTML5 `<button>` tag, and on the click event dispatch the **removeTicketAction** action method.
```Javascript
      <button
          aria-label="Increment value"
          onClick={() => dispatch(removeTicketAction())}
        >
          Decrement
      </button>
```
**Complete Code looks like below**
```Javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTicketAction, removeTicketAction } from './ticketSlice';

export function Ticket() {
    const count = useSelector((state) => state.ticket.value)
    const dispatch = useDispatch()

    return (
        <div style={{ padding: '100px' }}>
            <h1>Movie Tickets</h1>
            <table>
                <tr>
                    <th>Movie Name</th>
                    <th>Add</th>
                    <th>Remove</th>
                    <th>Total Tickets:</th>
                </tr>
                <tr>
                    <td>K.G.F: Chapter 2</td>
                    <td> <button style={{ background: 'Green' }}
                        aria-label="Add Tickets"
                        onClick={() => dispatch(addTicketAction())}><span style={{ fontSize: "30px" }}>+</span></button>
                    </td>
                    <td>
                        <button style={{ background: 'Red' }}
                            aria-label="Remove Ticket"
                            onClick={() => dispatch(removeTicketAction())}><span style={{ fontSize: "30px" }}>-</span></button>
                    </td>
                    <td>{count}</td>
                </tr>
            </table>
        </div>
    )
}
```

# App
```Javascript
import './App.css';
import { Ticket } from './Ticket';

function App() {
  return (
    <div className="App">
      <Ticket />
    </div>
  );
}

export default App;

```
