import React from 'react';
import {useSelector} from "react-redux";
import Attention from "./Attention";

const Library = () => {
    const words = useSelector(state => {
        const {reducers} = state;
        return reducers.word
    });
    return (
        <div className='library_wrapper'>
          <Attention text='Words | Translations'/>
            {
                words.length !== 0 ? words.map((el) =>
                    <div className="element">
                        <div className="word">
                            {el.word.charAt(0).toUpperCase() + el.word.slice(1)}
                        </div>
                        <div className="translate">
                            {el.translate.charAt(0).toUpperCase() + el.translate.slice(1)}
                        </div>
                    </div>) : <Attention text='There any words yet...'/>
            }
        </div>
    );
};

export default Library;
