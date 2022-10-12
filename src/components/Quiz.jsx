import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizs = useLoaderData();
    const { id, name, total, questions } = quizs.data;
    return (
        <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold text-blue-600'>Quiz of {name}</h1>
            {
                questions.map(question => <SingleQuiz questions={question} key={question.id}></SingleQuiz>)
            }
            <Link to='/topics'><button className='bg-green-400 text-black p-3 text-lg mt-5 rounded-lg font-bold'>Go to Topics</button></Link>
        </div>
    );
};

export default Quiz;