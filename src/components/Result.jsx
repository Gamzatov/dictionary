import React from 'react';
import img from '../assets/img/congratulations-icon.webp'

const MyComponent = ({correct, length}) => {
    console.log(length)
    return (
        <div className='result-wrapper'>
            <div className="img_wrapper"><img src={img} alt=""/></div>
            <h2> You answered {correct} out of {length} correctly</h2>
        </div>
    );
};

export default MyComponent;
