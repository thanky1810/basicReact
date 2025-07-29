import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  var { todos, todoInput } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    inputRef.current.focus();
    inputRef.current.value = "";
  };

  const handleDelete = (index) => {
    dispatch(actions.deteleTodo(index));
  };

  const handleFix = (index) => {
    const value = prompt("Enter value to change");
    console.log(index);
    dispatch(actions.fixTodo({ index, value }));
  };

  return (
    <div>
      <input
        ref={inputRef}
        state={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />

      <button onClick={handleAdd}> Add</button>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo} <span onClick={() => handleDelete(index)}>&times;</span>
              <button onClick={() => handleFix(index)}>fix</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
