import React, { useState } from 'react';

const Options = ({op, id, handleIsRight}) => {
    const [value, setValue] = useState(false);
    return (
        <div onClick={(e) => handleIsRight(op, e.target)} className="cursor-pointer border bottom-1 hover:bg-green-400 border-black border-opacity-25 p-2 rounded-md">         
                <input className='cursor-pointer' type="radio" name={id}/>
                <span className="label-text ml-3">{op}</span>           
        </div>
    );
};

export default Options;