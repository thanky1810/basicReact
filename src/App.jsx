import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };

  const handleDelete = () => {
    dispatch(actions.deteleTodo());
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
              {todo} <span onclick={handleDelete}>&times;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
