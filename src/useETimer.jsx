import { useEffect, useState } from "react";

function Timer() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const img = e.target.files[0];
    img.preview = URL.createObjectURL(img);
    setAvatar(img);
  };

  return (
    <>
      <input type="file" onChange={handlePreviewAvatar} />

      {avatar && <img src={avatar.preview} alt={avatar.name} />}
    </>
  );
}

export default Timer;
