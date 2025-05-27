import React from 'react'

function Profile() {
    return (
        <div>
            <div className='flex items-center justify-center bg-purple-500 p-4 min-h-screen '>
                <div className='flex relative flex-col bg-purple-100 p-6 rounded-lg w-full max-w-4xl'>
                    <div className='flex flex-col p-5 items-center'>
                        <h1 className='text-3xl font-bold text-center'>Profile</h1>
                        {/* cross btn  */}
                        <div className='absolute top-4 right-4'>
                            <button
                                onClick={() => navigate('/')}
                                className='absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900'
                                aria-label="Close Profile"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                    {/* Profile details */}
                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Profile" className='w-50 h-50 rounded-full border-pink-600 border-4 ' />
                            <div>
                                <h2 className='text-2xl font-bold'>user.name</h2>
                                <h3 className='text-lg text-gray-600'>user.email</h3>
                                <h3 className='text-lg text-gray-600'>user.role</h3>
                                <h3 className='text-lg text-gray-600'>user.Number</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
