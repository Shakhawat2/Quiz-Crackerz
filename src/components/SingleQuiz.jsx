
import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const SingleQuiz = ({questions}) => {
    const {correctAnswer, id, options, question} = questions;
    const oldQuestion = question.split('>').splice(1, 1).join('');
    const newQuestion = oldQuestion.split('<').splice(0,1).join('');
    
    const eyeIcon = () =>{
        toast(`Answer : ${correctAnswer}`, {autoClose : 3000})
    }
    const handleIsRight = (answer) =>{
        if(correctAnswer === answer){
            toast.success('Right answer', {autoClose : 500})
        }else{
            toast.error('Wrong answer', {autoClose : 500})
        }
    }
    return (
        <div className=' rounded-lg  bg-slate-100 shadow-lg border-blue-500 w-2/4 mx-auto mt-10 text-center p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl '>{newQuestion}</h1>
                <FontAwesomeIcon onClick={() => eyeIcon()} icon={faEye} className='text-green-500 cursor-pointer'/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6'>
                {
                    options.map((op, idx) => <Options op={op} key={idx} handleIsRight={handleIsRight}></Options>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;
