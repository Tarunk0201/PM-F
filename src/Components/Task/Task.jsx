import React from 'react';
import { useNavigate } from 'react-router-dom';

const Task = ({ role, tasks, deleteTask }) => {


    const maxDescriptionLength = 70;
    // Description height 
    const truncateDescription = (description) => {
        if (description.length > maxDescriptionLength) {
            return description.slice(0, maxDescriptionLength) + '...';
        }
        return description;
    };

    const navigate = useNavigate();

    return (
        <div className="task flex flex-col items-center justify-center min-h-screen bg-white  h-auto  ">
            <div className='container bg-purple-200 w-full p-2'>
                <div className='Task list'>
                    <div className='flex flex-col rounded'>
                        {/* sm:flex sm:flex-col sm:row */}
                        {/* name and btn */}
                        <div className='flex  justify-between md:flex-row flex-col items-cente m-2'>
                            <div>
                                <h1 className='text-2xl font-bold text-center m-2'>Task List</h1>
                            </div>
                            <div className='flex flex-wrap justify-center items-center'>
                                <button className='bg-blue-500 text-white p-2 rounded-lg m-2 w-40 hover:shadow-lg hover:text-lg font-semibold ' onClick={() => navigate("./AddTask")} >Add Task</button>
                            </div>
                        </div>
                        {/* task items   admin */}
                        {role === 'admin' && (
                            <div className='overflow-y-scroll max-h-150 flex flex-col overflow-x-hidden w-full scrollbar-hide scrollbar-track-gray-300 overflow-transparent bg-purple-200 '>
                                {tasks.map((task, index) => (
                                    <div key={index} className='task-item bg-purple-100 hover:bg-purple-300 m-2 w-full p-2 rounded-lg shadow-lg'>
                                        <div className='flex justify-between items-center flex-wrap'>
                                            <div className='flex flex-col p-2'>
                                                <h2 className='text-xl font-bold'> {task['Task Name']}</h2>
                                                <p>{truncateDescription(task.Deacription)}</p>
                                            </div>
                                            <div className='flex flex-wrap items-center md:gap-5 gap-2'>
                                                <div className='flex gap-5 md:flex  flex-wrap  p-1'>
                                                    <h2>{task.Time}</h2>
                                                    <h2>{task.Priority}</h2>
                                                    <h2>{task.Status}</h2>
                                                    <h2>{task.Deadline}</h2>
                                                </div>
                                                <div className="w-12 h-12 mx-2 m-2 rounded-full overflow-hidden border-2 border-white shadow-lg ">
                                                    <img
                                                        src={task.Avatar} // replace with your actual image path
                                                        alt="User Avatar"
                                                        className="w-full h-full object-cover "
                                                    />
                                                </div>
                                                <button
                                                    className="bg-red-500 text-white p-2 rounded-lg m-2  px-5 py-2  hover:shadow-lg "
                                                    onClick={() => deleteTask(index)}
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                        {role === 'user' && (
                            <div className='overflow-y-scroll max-h-150 flex flex-col overflow-x-hidden w-full scrollbar-hide scrollbar-track-gray-300 overflow-transparent bg-purple-200 '>
                                {tasks.map((task, index) => (
                                    <div key={index} className='task-item bg-purple-100 hover:bg-purple-300 m-2 w-full p-2 rounded-lg shadow-lg'>
                                        <div className='flex justify-between items-center flex-wrap'>
                                            <div className='flex flex-col p-2'>
                                                <h2 className='text-xl font-bold'> {task['Task Name']}</h2>
                                                <p>{truncateDescription(task.Deacription)}</p>
                                            </div>
                                            <div className='flex flex-wrap items-center md:gap-5 gap-2'>
                                                <div className='flex gap-5 md:flex  flex-wrap  p-1'>
                                                    <h2>{task.Time}</h2>
                                                    <h2>{task.Priority}</h2>
                                                    <h2>{task.Status}</h2>
                                                    <h2>{task.Deadline}</h2>
                                                </div>
                                                <div className="w-12 h-12 mx-2 m-2 rounded-full overflow-hidden border-2 border-white shadow-lg ">
                                                    <img
                                                        src={task.Avatar} // replace with your actual image path
                                                        alt="User Avatar"
                                                        className="w-full h-full object-cover "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
