import React, { useState } from 'react';

function DeleteTask({ initialTasks }) {
  const [taskData, setTaskData] = useState(initialTasks || []);
  const [deletingIndex, setDeletingIndex] = useState(null); // Track which task is in "delete mode"

  const truncateDescription = (desc) =>
    desc?.length > 60 ? desc.slice(0, 60) + '...' : desc;

  const handleDeleteClick = (index) => {
    setDeletingIndex(index); // Enter delete mode for that task
  };

  const confirmDelete = (index) => {
    const updatedTasks = taskData.filter((_, i) => i !== index);
    setTaskData(updatedTasks);
    setDeletingIndex(null); // Reset delete mode
  };

  return (
    <div className='overflow-y-scroll max-h-150 flex flex-col overflow-x-hidden w-full scrollbar-hide bg-purple-200'>
      {taskData.map((task, index) => {
        const isDeleting = deletingIndex === index;

        return (
          <div key={index} className='task-item bg-purple-300 m-2 w-full p-2 rounded-lg shadow-lg'>
            <div className='flex justify-between items-center flex-wrap'>
              {/* Left: Task Name & Description */}
              <div className='flex flex-col p-2'>
                <h2 className='text-xl font-bold'>Task: {task['Task Name']}</h2>
                <p>{truncateDescription(task.Description)}</p>
              </div>

              {/* Right: Avatar + Delete Mode */}
              <div className='flex items-center gap-4 flex-wrap p-2'>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src="/avatar.jpg"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Show extra info ONLY if not deleting */}
                {!isDeleting && (
                  <div className='flex gap-4 text-sm'>
                    <h2>{task.Time}</h2>
                    <h2>{task.Priority}</h2>
                    <h2>{task.Status}</h2>
                    <h2>{task.Deadline}</h2>
                  </div>
                )}

                {/* Buttons */}
                {!isDeleting ? (
                  <button
                    onClick={() => handleDeleteClick(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => confirmDelete(index)}
                    className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800"
                  >
                    Confirm Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteTask;
