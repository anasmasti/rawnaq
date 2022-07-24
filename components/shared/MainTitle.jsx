import React from 'react';

const MainTitle = ({value,styleClass}) => {
    return (
        <h1 className={`${styleClass}
                        m-12
                        text-dark
                        mb-6
                        uppercase
                        font-bold
                        text-[32px]
                        sm:text-[40px]
                        lg:text-[36px]
                        xl:text-4xl
                        underline decoration-red-500`}
      >
        {value}
      </h1>
    );
}

export default MainTitle;