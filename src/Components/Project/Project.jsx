// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import mockProjects from '../../data/mockProjects';

// const Project = ({ role }) => {  // use role from props
//   // const [showPopup, setShowPopup] = useState(false);
//   const [activeUsers, setActiveUsers] = useState([]);
//   const navigate = useNavigate();

//   const openPopup = (users, e) => {
//     e.stopPropagation();   // prevent card click
//     setActiveUsers(users);
//     // setShowPopup(true);
//   };

//   const closePopup = () => {
//     // setShowPopup(false);
//     setActiveUsers([]);
//   };

//   const goToProjectDetails = (projectId) => {
//     navigate(`/project/${projectId}`);
//   };

//   return (
//     <div className="p-6">
//       {/* Header with Create button for Admin */}
//       <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-serif text-purple-600">Projects</h1>
//         {role === "admin" && (
//           <button
//             onClick={() => navigate('/project/create')}
//             className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-2 rounded hover:from-purple-500 hover:to-purple-700 transition"
//           >
//             Create
//           </button>

//         )}
//       </div>
//       {/* Project Cards */}
//       <div className="grid grid-cols-1  border-gray-300 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
//         {mockProjects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => goToProjectDetails(project.id)}
//             className=" rounded p-4 shadow bg-white font-sans  w-full cursor-pointer"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-lg font-semibold text-purple-700">{project.name}</h2>
//               <span
//                 className={`px-3 py-1 text-sm rounded-full ${project.status === "Completed"
//                   ? "bg-green-100 text-green-700"
//                   : project.status === "In Progress"
//                     ? "bg-yellow-100 text-yellow-700"
//                     : "bg-red-100 text-red-700"
//                   }`}
//               >
//                 {project.status}
//               </span>
//             </div>

//             <p className="text-gray-700 mb-4">{project.description}</p>

//             <div className="flex items-center mt-3">
//               {project.users.slice(0, 3).map((user, index) => (
//                 <img
//                   key={index}
//                   src={user.avatar}
//                   alt={user.name}
//                   title={user.name}
//                   onClick={(e) => openPopup(project.users.map(u => u.name), e)}
//                   className="w-8 h-8 rounded-full border-2 border-white -ml-2 cursor-pointer first:ml-0"
//                 />
//               ))}
//               {project.users.length > 3 && (
//                 <div
//                   onClick={(e) => openPopup(project.users.map(u => u.name), e)}
//                   className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 text-xs flex items-center justify-center font-semibold border-2 border-white -ml-2 cursor-pointer"
//                 >
//                   +{project.users.length - 3}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Users Popu*/}
//       {/* {showPopup && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-80">
//             <h3 className="text-lg font-semibold mb-4">Users</h3>
//             <ul className="list-disc list-inside space-y-1 text-gray-700">
//               {activeUsers.map((user, idx) => (
//                 <li key={idx}>{user}</li>
//               ))}
//             </ul>
//             <button
//               onClick={closePopup}
//               className="mt-5 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Project;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import mockProjects from '../../data/mockProjects';

// const Project = ({ role }) => {
//   const [activeUsers, setActiveUsers] = useState([]);
//   const navigate = useNavigate();

//   const openPopup = (users, e) => {
//     e.stopPropagation();
//     setActiveUsers(users);
//   };

//   const closePopup = () => {
//     setActiveUsers([]);
//   };

//   const goToProjectDetails = (projectId) => {
//     navigate(`/project/${projectId}`);
//   };

//   return (
//     <div className="min-h-screen w-full px-2 sm:px-3 py-4 ">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6 w-full">
//         <h1 className="text-2xl sm:text-3xl font-serif text-purple-600">Projects</h1>
//         {role === "admin" && (
//           <button
//             onClick={() => navigate('/project/create')}
//             className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-2 rounded hover:from-purple-500 hover:to-purple-700 transition"
//           >
//             Create
//           </button>
//         )}
//       </div>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
//         {mockProjects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => goToProjectDetails(project.id)}
//             className="bg-white rounded shadow p-4 cursor-pointer flex flex-col justify-between h-full min-h-[250px] transition hover:shadow-lg"
//           >
//             {/* Top Section */}
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-lg font-semibold text-purple-700">{project.name}</h2>
//               <span
//                 className={`px-3 py-1 text-sm rounded-full ${
//                   project.status === "Completed"
//                     ? "bg-green-100 text-green-700"
//                     : project.status === "In Progress"
//                     ? "bg-yellow-100 text-yellow-700"
//                     : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {project.status}
//               </span>
//             </div>

//             {/* Description (takes available vertical space) */}
//             <p className="text-gray-700 mb-4 flex-grow text-sm">{project.description}</p>

//             {/* Avatar Section */}
//             <div className="flex items-center mt-auto">
//               {project.users.slice(0, 3).map((user, index) => (
//                 <img
//                   key={index}
//                   src={user.avatar}
//                   alt={user.name}
//                   title={user.name}
//                   onClick={(e) => openPopup(project.users.map(u => u.name), e)}
//                   className="w-8 h-8 rounded-full border-2 border-white -ml-2 cursor-pointer first:ml-0"
//                 />
//               ))}
//               {project.users.length > 3 && (
//                 <div
//                   onClick={(e) => openPopup(project.users.map(u => u.name), e)}
//                   className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 text-xs flex items-center justify-center font-semibold border-2 border-white -ml-2 cursor-pointer"
//                 >
//                   +{project.users.length - 3}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockProjects from '../../data/mockProjects';

const Project = ({ role }) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const navigate = useNavigate();

  const openPopup = (users, e) => {
    e.stopPropagation();
    setActiveUsers(users);
  };

  const closePopup = () => {
    setActiveUsers([]);
  };

  const goToProjectDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className=" w-full px-4 py-6 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6   w-full px-2 md:px-4">
        <h1 className="text-3xl font-serif text-purple-600">Projects</h1>
        {role === "admin" && (
          <button
            onClick={() => navigate('/project/create')}
            className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded hover:from-purple-500 hover:to-purple-700 transition"
          >
            Create
          </button>
        )}
      </div>

      {/* Grid of Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-2 md:px-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

        {mockProjects.map((project) => (
          // <div
          //   key={project.id}
          //   onClick={() => goToProjectDetails(project.id)}
          //   className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg h-full flex flex-col justify-between"
          // >
          <div
          key={project.id}
          onClick={() => goToProjectDetails(project.id)}
          className="bg-white p-4 shadow-md rounded-lg w-full min-h-[200px] transition hover:shadow-lg cursor-pointer"
        >
        

            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-purple-700">{project.name}</h2>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : project.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            </div>

            {/* User Avatars */}
            <div className="flex items-center mt-3">
              {project.users.slice(0, 3).map((user, index) => (
                <img
                  key={index}
                  src={user.avatar}
                  alt={user.name}
                  title={user.name}
                  onClick={(e) => openPopup(project.users.map((u) => u.name), e)}
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2 cursor-pointer first:ml-0"
                />
              ))}
              {project.users.length > 3 && (
                <div
                  onClick={(e) => openPopup(project.users.map((u) => u.name), e)}
                  className="w-8 h-8 rounded-full bg-purple-200 text-purple-800 text-xs flex items-center justify-center font-semibold border-2 border-white -ml-2 cursor-pointer"
                >
                  +{project.users.length - 3}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
