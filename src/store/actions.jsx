import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, FIX_TODO } from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deteleTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const fixTodo = (payload) => ({
  type: FIX_TODO,
  payload,
});
