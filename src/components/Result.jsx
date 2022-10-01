import React from 'react';
import img from '../assets/img/congratulations-icon.webp'

const Result = ({correct, length}) => {
    const unLucky = (correct * 100) / length;

    return (
        <div className='result-wrapper'>
            <div className="result_wrapper">
                {
                    correct >= 3 ? <h1 className='title'>Try again</h1> :
                        <div className="img_wrapper"><img src={img} alt=""/></div>}

                <h2> You result {unLucky === Infinity ? '0' : unLucky.toFixed(2)}% of 100% correctly</h2>
            </div>


        </div>
    );
};

export default Result;
