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
        if (rightAnswer.length >= 1) {
            setStep(step + 1);
            setCorrect(correct + 1);
        } else {
            alert('add more words')
        }
    }
    const randomIndex = Math.floor(Math.random() * (rightAnswer.length - 1));

    const [correct, setCorrect] = useState(0);
    let getRandom = (function(array) {
        let notGivenItems = array.map(function(el) {
            return el;
        });

        let getIndex = function() {
            return Math.floor(Math.random() * notGivenItems.length);
        };

        return function() {
            if (notGivenItems.length === 0) {
                return;
            }

            return notGivenItems.splice(getIndex(), 1)[0];
        };
    })(rightAnswer); // items, in your case

    getRandom();
    getRandom();

    return (
        <div className='game-wrapper'>
            <div className="answers-wrapper">
                {<p>{step + 1} / {rightAnswer.length}</p>}
                <div className="answer">
                    {rightAnswer[0] === undefined ? 'add some words to library' :
                        <ul className='answer-list'>
                            <li onClick={nextQuestion} className='answer-item'>
                                {rightAnswer[randomIndex].word.charAt(0).toUpperCase() + rightAnswer[randomIndex].word.slice(1)}
                            </li>
                            {
                                addWords.slice(step * 3, step * 3 + 3).map((el, index) => <li onClick={nextQuestion}
                                                                                              className='answer-item'>
                                    {el.charAt(0).toUpperCase() + el.slice(1)}
                                </li>)
                            }
                        </ul>}
                    <p>{correct}</p>
                </div>
            </div>
        </div>
    );
};

export default Game;
