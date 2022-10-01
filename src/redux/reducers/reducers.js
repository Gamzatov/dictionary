import {ADD_WORD, DELETE_WORD} from "../actions/actions";

const initialState = {
    word: [],
    variants: ['shut', 'shake', 'violet',
        'apologize', 'zephyr', 'deny', 'crib', 'pause', 'futuristic', 'chain', 'spread', 'strain', 'rush', 'silk', 'magnificent', 'yarn', 'quiver', 'grant', 'brain', 'north', 'safe', 'subtract', 'sparkle', 'chair', 'tongue', 'maskquiet', 'lade', 'participate', 'slim']
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD: {
            return {
                ...state,
                word: [...state.word, action.word],

            }
        }

        default:
            return state;
    }

}