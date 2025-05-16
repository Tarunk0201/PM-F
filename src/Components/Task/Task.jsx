import React from 'react';
import taskData from '../../MockData/Task.json';

const Task = () => {
    const maxDescriptionLength = 70;
    // Description height 
    const truncateDescription = (description) => {
        if (description.length > maxDescriptionLength) {
            return description.slice(0, maxDescriptionLength) + '...';
        }
        return description;
    };

    return (
        <div className="task flex flex-col items-center justify-center min-h-screen bg-white  h-auto  ">
            <div className='container bg-purple-200 w-full p-2'>
                <div className='Task list'>
                    <div className='flex flex-col rounded'>
                        {/* name and btn */}
                        <div className='flex flex-wrap justify-between  md:flex md:g-1'>
                            <div>
                                <h1 className='text-2xl font-bold text-center m-2'>Task List</h1>
                            </div>
                            <div>
                                <button className='bg-blue-500 text-white p-2 rounded-lg m-2 w-40'>Add Task</button>
                                <button className='bg-blue-500 text-white p-2 rounded-lg m-2 w-40'>Delete Task</button>
                            </div>
                        </div>
                        {/* task items */}
                        {taskData.map((task, index) => (
                            <div key={index} className='task-item bg-purple-300 m-2 w-full p-2 rounded-lg shadow-lg'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-xl font-bold'>Task {task['Task Name']}</h2>
                                        <p>{truncateDescription(task.Deacription)}</p>
                                    </div>
                                    <div className='flex gap-5 md:flex  flex-wrap  '>
                                        <h2>{task.Time}</h2>
                                        <h2>{task.Priority}</h2>
                                        <h2>{task.Status}</h2>
                                        <h2>{task.Deadline}</h2>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
