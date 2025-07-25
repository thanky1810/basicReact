import { useState, useReducer, useRef } from "react";

//useReducer
//1. Init state: []
//2. Actions: add, delete
//3. Reducer
//4. dispatch

//1. Init state: []
const initState = {
  job: "",
  jobs: [],
};

//2. Actions: add, delete
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
//3. Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      if (action.payload !== "") {
        return { ...state, job: action.payload };
      }
      return state;

    case ADD_JOB:
      return { ...state, job: "", jobs: [...state.jobs, action.payload] };

    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((_, index) => index !== action.payload),
      };

    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));

    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    dispatch(deleteJob(index));
  };

  return (
    <>
      <div>
        <h3>Todo</h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Add
        </button>
        <ul>
          {jobs.map((job, index) => {
            return (
              <li key={index}>
                {job}
                <span onClick={() => handleDelete(index)}>&times;</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
