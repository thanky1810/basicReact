import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };

  const handleDelete = (index) => {
    dispatch(actions.deteleTodo(index));
  };

  const handleFix = (index) => {
    const value = prompt("Enter value to change");
    dispatch(actions.fixTodo({ index, value }));
  };

  return (
    <div>
      <input
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
              {todo} <span onclick={handleDelete(index)}>&times;</span>
              <button onClick={() => handleFix()}>fix</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
