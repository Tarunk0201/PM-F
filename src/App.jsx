import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Leftbar from "./Components/Dashboard/Leftbar";
import Dashboard from "./Components/Dashboard/Mainbody";
import Project from "./Components/Project/Project";
import ProjectDetails from "./Components/Project/ProjectDetails";
import CreateProject from "./Components/Project/CreateProject";

function App() {
  const userRole = "admin";

  // currentUser here (hardcoded or fetched from auth)
  const currentUser = {
    id: 1, // user id by which user project details can be seen 
    name: "Monu Parmar"
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2edf3' }}>
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

export default App;
