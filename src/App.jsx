import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Task/AddTask";

const role = "admin";

function App() {
  return (
    <>

      <Router>
        <Routes>
          {/* Task  */}
          <Route path="/" element={<Task role={role} />} />
          <Route path="/AddTask" element={<AddTask  />} />
          {/* <Route path="/DeleteTask" element={<DeleteTask  />} /> */}
        </ Routes>
      </Router>
      
    </>
  );
}

export default App;
