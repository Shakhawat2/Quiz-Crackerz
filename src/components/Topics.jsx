import React from 'react';
import { Link } from 'react-router-dom';


const Topics = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="w-auto rounded-md shadow-lg p-3">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h- dark:bg-gray-500" />
            <div className='flex justify-between items-center mt-2'>
                <h1 className='text-lg font-semibold text-blue-500'>{name}</h1>
                <Link to={`/quiz/${id}`}>
                    <button type='button' className='bg-blue-400 text-white p-1 rounded-md f'>Start Practice</button>
                </Link>
            </div>
        </div>
    );
};

export default Topics;