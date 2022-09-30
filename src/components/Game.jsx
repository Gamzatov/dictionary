import React, {useState} from 'react';
import {useSelector} from "react-redux";

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
        }
        if (step > rightAnswer.length) {
            alert('add more words')
        }
    }
    console.log('rightAnswer', rightAnswer)
    const [correct, setCorrect] = useState(0);

    function shuffle(array) {
        let i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const percentage = Math.round(step / rightAnswer.length * 100);
    console.log(percentage)
    console.log('step', step)
    let wordsIndexes = Array.from(rightAnswer.keys());
    let ranNums = shuffle(wordsIndexes);
    console.log(ranNums)
    return (
        <div className='game-wrapper'>
            <div className="answers-wrapper">
                {<p>{step + 1} / {rightAnswer.length}</p>}
                <div className="answer">

                    <div style={{width: `${percentage}%`}} className="progress__inner">s</div>

                    <h1>Choose right translation
                        of {rightAnswer[step] !== undefined ? rightAnswer[step].word : 's'}  </h1>
                    {rightAnswer[0] === undefined ? 'add some words to library' :
                        <div>
                            {step > rightAnswer.length ? 'results' :
                                <ul className='answer-list'>
                                    <li onClick={nextQuestion} className='answer-item'>
                                        {rightAnswer[ranNums[step]].translate.charAt(0).toUpperCase() + rightAnswer[ranNums[step]].word.slice(1)}
                                    </li>
                                    {
                                        addWords.slice(step * 3, step * 3 + 3).map((el, index) => <li
                                            onClick={nextQuestion}
                                            className='answer-item'>
                                            {el.charAt(0).toUpperCase() + el.slice(1)}
                                        </li>)
                                    }
                                </ul>
                            }
                        </div>}
                    <p>{correct}</p>
                </div>
            </div>
        </div>
    );
};

export default Game;
