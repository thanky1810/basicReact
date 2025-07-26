import { useRef, useEffect } from "react";
import Video from "./video";

function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  const hanldePlay = () => {
    videoRef.current.play();
  };

  const hanldePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={hanldePlay}>Play</button>
      <button onClick={hanldePause}>Pause</button>
    </div>
  );
}

export default App;
