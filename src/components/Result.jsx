import React from 'react';

const MyComponent = ({correct, length}) => {
    console.log(length)
    return (
        <div className='result-wrapper'>
            <h2> You answered {correct} right of {length}</h2>
        </div>
    );
};

export default MyComponent;
