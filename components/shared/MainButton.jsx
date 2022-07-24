import React from 'react';

const MainButton = ({value,styleClass,onClick}) => {
    return (
        <button className={`
                    ${styleClass}
                      inline-block
                      w-full px-8
                      py-2 mx-auto
                      mt-0 text-base 
                      font-bold text-white
                      bg-red-500 
                      border-t 
                      border-gray-200
                      rounded-md 
                      sm:mt-1 
                      fold-bold 
                      lg:mx-0`}
                onClick={()=>onClick()}
            >
        {value}
        </button>
    );
}

export default MainButton;