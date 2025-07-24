import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(60);

  const countDown = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    console.log(h1Ref.current);
  });

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    countDown.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countDown.current);
  };

  console.log(count, prevCount.current);
  return (
    <>
      <h1 ref={h1Ref}>Render Count: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default App;
