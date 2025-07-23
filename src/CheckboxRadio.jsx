import { useState } from "react";
import "./App.css";
function App() {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckbox = (course) => {
    if (selectedIds.includes(course)) {
      setSelectedIds(selectedIds.filter((index) => index !== course));
    } else {
      setSelectedIds([...selectedIds, course]);
    }
  };

  const [click, setClick] = useState();

  const handleRadio = (course) => {
    setClick(course);
  };
  console.log(click);
  const courses = [
    { id: 1, name: "HTML, CSS" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "ReactJS" },
  ];

  return (
    <>
      {courses.map((course) => (
        <label key={course.id}>
          <input
            type="checkbox"
            value={course.id}
            checked={selectedIds.includes(course.id)}
            onChange={() => handleCheckbox(course.id)}
          />
          {course.name}
        </label>
      ))}
      <br></br>
      {courses.map((course) => (
        <label key={course.id}>
          <input
            type="radio"
            value={course.id}
            onChange={() => handleRadio(course.id)}
            checked={click === course.id}
          />
          {course.name}
        </label>
      ))}
    </>
  );
}

export default App;
