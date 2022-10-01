export const ADD_WORD = 'ADD_WORD';
export const DELETE_WORD ='DELETE_WORD'

export const addWord = (word, translate) => {
    return {
        type: ADD_WORD,
        word: {word: word, translate:translate }
    }
}

export const deleteWord = (word,translate) => {
    return{
        type: DELETE_WORD,
        word
    }
}