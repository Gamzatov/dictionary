import React from 'react';
import img from '../assets/img/congratulations-icon.webp'
import {Link} from "react-router-dom";

const Result = ({correct, length}) => {
    const unLucky = (correct * 100) / length;

    return (
        <div className='result-wrapper'>
            <div className="result_wrapper">
                {
                    unLucky <= 30 ? <div className="fail">
                            <h1 className='title'>Try again</h1>
                            <Link className='repeat-btn' to='/dictionary'>Repeat Words</Link>
                        </div> :
                        <div className="img_wrapper"><img src={img} alt=""/></div>}
                <h2> You result {unLucky === Infinity ? '0' : unLucky.toFixed(0)}% of 100% correctly</h2>

            </div>


        </div>
    );
};

export default Result;
