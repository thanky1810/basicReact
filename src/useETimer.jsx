import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(5);

  //   useEffect(() => {
  //     if (time === 0) return;
  //     const count = setTimeout(() => {
  //       setTime(time - 1);
  //       console.log(time);
  //     }, 1000);

  //     return () => clearTimeout(count);
  //   }, [time]);

  useEffect(() => {
    const count = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) return prev;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;
