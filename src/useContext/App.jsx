import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
//Context
//1. create context
//2. provider
//3. consumer

function App() {
  const toggleTheme = useContext(ThemeContext);

  console.log(toggleTheme);
  return (
    <div>
      <button onClick={toggleTheme.toggleTheme}>toggle</button>
      <Content />
    </div>
  );
}

export default App;
