import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import mockProjects from '../../data/mockProjects';
import mockUsers from '../../data/users';

const CreateProject = ({ role }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const existingProject = id ? mockProjects.find(p => p.id === parseInt(id)) : null;

  const [formData, setFormData] = useState({
    name: existingProject?.name || '',
    type: existingProject?.type || '',
    status: existingProject?.status || '',
    priority: existingProject?.priority || '',
    startDate: existingProject?.startDate || '',
    endDate: existingProject?.endDate || '',
    description: existingProject?.description || '',
    users: existingProject?.users?.map(u => u.name).join(', ') || '',
  });

  const [userSearch, setUserSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState(
    existingProject?.users?.map(u => u.name) || []
  );

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      users: selectedUsers.join(', ')
    }));
  }, [selectedUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectUser = (user) => {
    if (!selectedUsers.includes(user.name)) {
      setSelectedUsers([...selectedUsers, user.name]);
    }
    setUserSearch('');
  };

  const handleRemoveUser = (name) => {
    setSelectedUsers(selectedUsers.filter(u => u !== name));
  };

  const filteredUsers = mockUsers.filter(
    user =>
      user.name.toLowerCase().includes(userSearch.toLowerCase()) &&
      !selectedUsers.includes(user.name)
  );

  const handleCreate = () => {
    alert('Create project feature not implemented yet.');
  };

  const handleUpdate = () => {
    alert('Update project feature not implemented yet.');
  };

  const handleDelete = () => {
    alert('Delete project feature not implemented yet.');
  };

  const handleClear = () => {
    setFormData({
      name: '',
      type: '',
      status: '',
      priority: '',
      startDate: '',
      endDate: '',
      description: '',
      users: '',
    });
    setSelectedUsers([]);
    setUserSearch('');
  };

  if (role !== 'admin') {
    return <div className="text-center mt-10 text-red-600">Access Denied. Admins only.</div>;
  }

  return (
    <div className="flex items-center justify-center px-4 py-6">
      <div className="w-[95%] max-w-[1200px] bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-600">
            {existingProject ? 'Edit Project' : 'Create Project'}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-purple-500 hover:text-purple-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Name and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-sans text-gray-700 mb-1">Project Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>
          </div>

          {/* Priority, Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-sans text-gray-700 mb-1">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 border-gray-300"
                required
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="block font-sans text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>
            <div>
              <label className="block font-sans text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 border-gray-300"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-sans text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 border-gray-300"
              rows={4}
            />
          </div>

          {/* Users */}
          <div>
            <label className="block font-sans text-gray-700 mb-1">Users</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedUsers.map(user => (
                <div key={user} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full flex items-center">
                  {user}
                  <button
                    type="button"
                    className="ml-2 text-sm text-purple-600 hover:text-red-500"
                    onClick={() => handleRemoveUser(user)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="w-full border rounded px-3 py-2 border-gray-300"
              placeholder="Search users"
            />
            {userSearch && filteredUsers.length > 0 && (
              <ul className="border mt-1 rounded bg-white shadow max-h-40 overflow-y-auto">
                {filteredUsers.map(user => (
                  <li
                    key={user.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectUser(user)}
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            {existingProject ? (
              <>
                <button
                  onClick={handleUpdate}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleClear}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Clear
                </button>
                <button
                  onClick={handleCreate}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                  Create
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
