import { useState } from "react";

function TodoList() {
  const [list, setList] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });
  const [work, setWork] = useState("");

  const handleAdd = () => {
    if (work.trim() !== "") {
      setList((prev) => {
        const newJobs = [...prev, work];
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem("jobs", jsonJobs);

        return newJobs;
      });
      setWork("");
    }
  };

  const handleWork = (e) => {
    setWork(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(updatedList));
    setList(updatedList);
  };

  const handleFix = (index) => {
    const newText = prompt("Change value");
    if (newText !== null && newText.trim() !== "") {
      const updatedList = [...list];
      updatedList[index] = newText.trim();
      localStorage.setItem("jobs", JSON.stringify(updatedList));
      setList(updatedList);
    }
  };

  return (
    <>
      <input type="text" value={work || ""} onChange={handleWork} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((work, index) => {
          return (
            <div key={index}>
              <li>{work}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleFix(index)}>Fix</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
