import React from 'react';
import {useSelector} from "react-redux";

const Library = () => {
    const words = useSelector(state => {
        const {reducers} = state;
        return reducers.word
    });
    console.log(words)
    return (
        <div className='library_wrapper'>
            <h3>Words/translations</h3>
            {
                words.length !== 0 ? words.map((el) =>
                    <div className="element">
                        <div className="word">
                            {el.word.charAt(0).toUpperCase() + el.word.slice(1)}
                        </div>
                        <div className="translate">
                            {el.translate.charAt(0).toUpperCase() + el.translate.slice(1)}
                        </div>
                    </div>) : <div className='empty_library_wrapper'><h1> There any words yet...</h1></div>
            }
        </div>
    );
};

export default Library;
