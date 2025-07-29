import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT, FIX_TODO } from "./constants";

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
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case FIX_TODO:
      const updateList = state.todos;
      updateList[action.payload.index] = action.payload.value;
      return {
        ...state,
        todos: updateList,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
