import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS, JS",
  },
  {
    id: 2,
    name: "Ruby",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [lessonId, setLessonId] = useState(1);

  return (
    <>
      <ul>
        {courses.map((course) => {
          return (
            <li
              key={course.id}
              onClick={() => setLessonId(course.id)}
              style={{
                color: lessonId === course.id ? "red" : "#333",
              }}
            >
              {course.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
