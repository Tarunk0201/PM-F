import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../MockData/user.json';

export default function AddTask({ addTask }) {
    const [taskName, setTaskName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [Assigne_to, setAssigne_to] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('incomplete');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            "Task Name": taskName,
            "Project Name": projectName,
            "Assigne_to": Assigne_to,
            "Deacription": description,
            "Time": `${startDate} to ${endDate}`,
            "Priority": priority,
            "Status": status,
            "Deadline": endDate
        };

        addTask(newTask);
        navigate('/');
    };

    return (
        <div className='flex items-center justify-center bg-purple-500 p-4 min-h-screen '>
            
            <form onSubmit={handleSubmit} className='flex relative flex-col bg-purple-100 p-6 rounded-lg w-full max-w-4xl'>
                
                <div className='flex flex-col p-5 items-center'>
                    <h1 className='text-3xl font-bold text-center'>Add Task</h1>
                    {/* cross btn  */}
                    <div className='absolute top-4 right-4'>
                    <button
                onClick={() => navigate('/')}
                className='absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900'
                aria-label="Close Add Task"
            >
                &times;
            </button>
            </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col sm:flex-row sm:space-x-4'>
                        <div className='flex flex-col flex-1'>
                            <label className='text-xl font-semibold mb-1'>Task Name</label>
                            <input
                                type="text"
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col flex-1 mt-4 sm:mt-0'>
                            <label className='text-xl font-semibold mb-1'>Project Name</label>
                            <input
                                type="text"
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xl font-semibold mb-1'>Assigne to</label>
                        <select
                            className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                            value={Assigne_to}
                            onChange={(e) => setAssigne_to(e.target.value)}
                            required
                        >
                            {user.map((user) => (
                                <option key={user.Id} value={user.name}  >
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-xl font-semibold mb-1'>Description</label>
                        <textarea
                            className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full h-40 resize-none'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:space-x-4'>
                        <div className='flex flex-col flex-1'>
                            <label className='text-xl font-semibold mb-1'>Start Date</label>
                            <input
                                type="date"
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col flex-1 mt-4 sm:mt-0'>
                            <label className='text-xl font-semibold mb-1'>End Date</label>
                            <input
                                type="date"
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:space-x-4 items-center'>
                        <div className='flex flex-col flex-1'>
                            <label className='text-xl font-semibold mb-1'>Priority</label>
                            <select
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                required
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className='flex flex-col flex-1 mt-4 sm:mt-0'>
                            <label className='text-xl font-semibold mb-1'>Status</label>
                            <select
                                className='border-2 border-gray-300 bg-purple-200 rounded-md p-2 w-full'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="complete">Complete</option>
                                <option value="incomplete">Incomplete</option>
                                <option value="progress">In Progress</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:space-x-4 justify-center mt-4'>
                        <button
                            type="submit"
                            className='bg-blue-500 text-white p-2 rounded-lg w-full sm:w-40 mb-2 sm:mb-0'
                        >
                            Add Task
                        </button>
                        <button
                            type="reset"
                            className='bg-blue-500 text-white p-2 rounded-lg w-full sm:w-40'
                            onClick={() => {
                                (
                                    setTaskName(''),
                                    setProjectName(''),
                                    setDescription(''),
                                    setStartDate(''),
                                    setEndDate(''),
                                    setPriority('low'),
                                    setStatus('incomplete')
                                )
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>


            </form>
        </div>
    )
}
