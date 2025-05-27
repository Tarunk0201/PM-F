import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Task from "./Components/Task/Task";
import AddTask from "./Components/Task/AddTask";
import taskData from "./MockData/Task.json";
import user from "./MockData/user.json";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Leftbar from "./Components/Dashboard/Leftbar";
import Dashboard from "./Components/Dashboard/Mainbody";
import Project from "./Components/Project/Project";
import ProjectDetails from "./Components/Project/ProjectDetails";
import CreateProject from "./Components/Project/CreateProject";
const role = "admin"; // or "user"
const userRole = "admin";
function App() {
  const [tasks, setTasks] = useState(taskData);
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (indexToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };
  // currentUser here (hardcoded or fetched from auth)
  const currentUser = {
    id: 1, // user id by which user project details can be seen
    name: "Monu Parmar"
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2EDF3' }}>
      <Navbar />
      <div className="pt-16 flex">
        <Leftbar role={userRole} collapsed={collapsed} setCollapsed={setCollapsed} />
        {/* Add margin-left based on sidebar collapse */}
        {/* <div
          className={`transition-all duration-300 ease-in-out p-4 w-full ${collapsed ? "ml-20" : "ml-64"
            }`}
        > */}
        <div
          className={`transition-all duration-300 ease-in-out p-4 pt-16 w-full ${
            collapsed ? "ml-16 sm:ml-20 md:ml-20" : "ml-20 sm:ml-20 md:ml-64"
            }`}
        >
          <Routes>
            <Route path="/" element={<Dashboard collapsed={collapsed} setCollapsed={setCollapsed} />} />
            <Route path="/task" element={<Task role={role} tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/AddTask" element={<AddTask addTask={addTask} user={user} />} />
            <Route path="/project" element={<Project role={userRole} />} />
            <Route path="/project/:id" element={<ProjectDetails role={userRole} currentUser={currentUser} />} />
            <Route path="/project/create" element={<CreateProject role={userRole} />} />
            <Route path="/project/edit/:id" element={<CreateProject role={userRole} />} />
          </Routes>
        </div>
      </div>
    </div>
          );
        }