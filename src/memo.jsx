import { useState, memo } from "react";

const Todos = memo(({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  console.log(1);

  const handleAdd = () => {
    setTodos([...todos, 1]);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={handleAdd}>-</button>
      </div>
    </>
  );
};

export default App;
