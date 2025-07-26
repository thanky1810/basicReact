import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.jobs.filter((_, index) => index !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
