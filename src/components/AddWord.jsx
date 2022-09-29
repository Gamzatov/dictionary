import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addWord} from "../redux/actions/actions";
import Library from "./Library";

const AddWord = () => {
    const [word, setWord] = React.useState('');
    const [translate, setTranslate] = React.useState('');
    const dispatch = useDispatch();

    const handleWordInput = (e) => {
        setWord(e.target.value);
        console.log(e.target.value)
    }
    const handleTranslateInput = (e) => {
        setTranslate(e.target.value);
    }
    const wordsArray = useSelector(state => {
        const {reducers} = state;
        return reducers.word;
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addWord(word, translate));
        setWord('');
        setTranslate('');
    }

    console.log(wordsArray);
    return (
        <div>
            <div className="words_wrapper">
                <form className='wordForm' onSubmit={handleSubmit}>
                    <div className="input_wrapper">
                        <div className="wordInput">
                            <input placeholder='Word' value={word} onChange={handleWordInput} type="text"/>
                        </div>
                        <div className="wordInput">
                            <input placeholder='Translate' value={translate} onChange={handleTranslateInput} type="text"/>
                        </div>
                    </div>
                    <button type='submit' className='sub_btn'>Add word</button>
                </form>
            </div>
            <div className="library_wrapper">
                <Library/>
            </div>

        </div>
    );
};

export default AddWord;
