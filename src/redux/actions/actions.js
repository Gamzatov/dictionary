export const ADD_WORD = 'ADD_WORD';


export const addWord = (word, translate) => {
    return {
        type: ADD_WORD,
        word: {word: word, translate:translate }
    }
}
