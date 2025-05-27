import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import mockProjects from '../../data/mockProjects';
import { X, Trash2, Pencil } from 'lucide-react';

const ProjectDetails = ({ role, currentUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = mockProjects.find(p => p.id === parseInt(id));

  if (!project) return <div className="text-center mt-10 text-red-600">Project not found</div>;

  const userHasAccess =
    role === 'admin' || project.users.some(user => user.id === currentUser.id);

  if (!userHasAccess) {
    return <Navigate to="/project" replace />;
  }

  const handleDeleteTask = (taskName) => {
    alert(`Delete task "${taskName}" feature not implemented yet.`);
  };

  const handleUpdateProject = () => {
    navigate(`/edit-project/${project.id}`);
  };

  return (
    <div className="min-h-[calc(100vh-2rem)] w-full px-4 py-6">
      <div className="max-w-7xl w-full mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
          <h1 className="text-2xl font-bold text-purple-700">{project.name}</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
              {project.status}
            </span>
            <span className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded-full">
              {project.priority}
            </span>
            <button
              onClick={() => navigate(-1)}
              className="text-purple-500 hover:text-purple-700 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {/* Tasks */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tasks</h2>
          <div className="space-y-3">
            {project.tasks.map((task, index) => (
              <div
                key={index}
                className="flex flex-wrap sm:flex-nowrap justify-between items-center border border-gray-300 p-3 rounded shadow-sm gap-3"
              >
                <div className="font-medium text-purple-600 w-full sm:w-1/5">{task.name}</div>
                <div className="text-gray-700 w-full sm:w-1/5">{task.user}</div>
                <div className="text-gray-600 w-full sm:w-1/5">{task.dueDate}</div>
                <div
                  className={`text-sm px-3 py-1 rounded-full text-center w-full sm:w-1/5
                    ${task.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : task.status === 'Pending'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                    }`}
                >
                  {task.status}
                </div>
                <div className="w-full sm:w-1/5 text-right">
                  {role === 'admin' && (
                    <button
                      onClick={() => handleDeleteTask(task.name)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete Task"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Button */}
        {role === 'admin' && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleUpdateProject}
              className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-5 py-2 rounded hover:from-purple-500 hover:to-purple-700 transition flex items-center gap-2"
            >
              <Pencil className="w-4 h-4" />
              Update Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
