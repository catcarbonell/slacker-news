import React from 'react';

const Container = ({children}) => {
    return(
        <div className="m-auto w-2/3 flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
            {children}
        </div>
    )
}

export default Container;