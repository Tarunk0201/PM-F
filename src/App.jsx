import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Task/AddTask";
import taskData from "./MockData/Task.json";
import user from "./MockData/user.json";
import Profile from "./Components/Profile/Profile";

const role = "admin"; // or "user"

function App() {
  const [tasks, setTasks] = useState(taskData);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (indexToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Profile  */}
          {/* <Route path="/" element={<Profile role={role} />} /> */}
          {/* Task  */}
          <Route path="/" element={<Task role={role} tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/AddTask" element={<AddTask addTask={addTask} user={user} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
