import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Task/AddTask";
import taskData from "./MockData/Task.json";

const role = "admin";

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
          {/* Task  */}
          <Route path="/" element={<Task role={role} tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/AddTask" element={<AddTask addTask={addTask} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
