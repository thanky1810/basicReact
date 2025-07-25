import { useState, useReducer, useRef } from "react";

//useReducer
//1. Init state: []
//2. Actions: add, delete
//3. Reducer
//4. dispatch

//1. Init state: []
const initState = [];

//2. Actions: add, delete
const ADD_ACTION = "add";
const DELETE_ACTION = "delete";

//3. Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      if (action.payload !== "") {
        return [...state, action.payload];
      }
      return state;
    case DELETE_ACTION:
      return state.filter((_, index) => index !== action.payload);
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initState);

  const inputRef = useRef();

  return (
    <>
      <div>
        <h3>TOdo</h3>
        <input ref={inputRef} type="text" placeholder="Enter todo..." />
        <button
          onClick={() => {
            const value = inputRef.current.value;
            dispatch({ type: ADD_ACTION, payload: value });
            inputRef.current.value = "";
          }}
        >
          Add
        </button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <span
                  onClick={() =>
                    dispatch({ type: DELETE_ACTION, payload: index })
                  }
                >
                  &times;
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
