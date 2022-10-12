import React, { useState } from 'react';

const Options = ({op, handleIsRight}) => {
    const [value, setValue] = useState(false);
    return (
        <div onClick={() => handleIsRight(op)} className="cursor-pointer border bottom-1 hover:bg-green-400 border-black border-opacity-25 p-2 rounded-md">         
                
                <span className="label-text ml-3">{op}</span>           
        </div>
    );
};

export default Options;