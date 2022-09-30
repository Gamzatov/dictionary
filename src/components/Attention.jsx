import React from 'react';

const Attention = ({text}) => {
    return (
        <div className='attention_wrapper'>
            <h2>
                {text}
            </h2>
        </div>
    );
};

export default Attention;
