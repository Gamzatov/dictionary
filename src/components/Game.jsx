import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Result from "./Result";
import Attention from "./Attention";

const Game = () => {
    const addWords = useSelector((state => {
        const {reducers} = state;
        return reducers.variants;
    }));
    const rightAnswer = useSelector((state) => {
        const {reducers} = state;
        return reducers.word;
    });
    const [step, setStep] = useState(0);
    const nextQuestion = () => {
        if (step >= 0) {
            setStep(step + 1);
            setCorrect(correct + 1)
        }
        if (step > rightAnswer.length) {
            alert('add more words')
        }
    };
    const wrongAnswer = () => {
        setStep(step + 1);
    }
    const [correct, setCorrect] = useState(0);

    //random index selection
    function shuffle(array) {
        let i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    //Array of words to indexes array
    let wordsIndexes = Array.from(rightAnswer.keys());
    //randomize indexes of arrray
    let ranNums = shuffle(wordsIndexes);
    const index = ranNums[step];
    //status bar
    const percentage = Math.round(step / rightAnswer.length * 100);
    return (
        <div className='game-wrapper'>
            <div className="answers-wrapper">

                <div className="answer">

                    {rightAnswer[0] === undefined ? <Attention  text='There no anything to repeat. Add some words to library'/> :
                        <div>
                            <div style={{width: `${percentage}%`}} className="progress__inner"></div>
                            {ranNums[step] === undefined ? <Result correct={correct} length={rightAnswer.length}/> :
                                <div>
                                    <h1 className='title'>Choose right translation
                                        of {rightAnswer[step] !== undefined ? rightAnswer[ranNums[step]].word : 's'}  </h1>
                                    <ul className='answer-list'>

                                        <li onClick={nextQuestion} className='answer-item'>
                                            {rightAnswer[ranNums[step]].translate.charAt(0).toUpperCase() + rightAnswer[ranNums[step]].word.slice(1)}
                                        </li>
                                        {
                                            addWords.slice(step * 3, step * 3 + 3).map((el, index) => <li
                                                onClick={wrongAnswer}
                                                className='answer-item'>
                                                {el.charAt(0).toUpperCase() + el.slice(1)}
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Game;
