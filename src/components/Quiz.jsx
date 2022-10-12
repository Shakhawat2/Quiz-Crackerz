import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
        </div>
    );
};

export default Quiz;