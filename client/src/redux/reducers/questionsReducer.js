import { INIT_QUESTIONS, UPDATE_QUESTION } from '../actionTypes/questionsAT';

const initialState = { questions: [] };

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_QUESTIONS:
            return {
                ...state,
                questions: action.payload.map((el) => {
                    el.isAnswered = false;
                    return el;
                })
            };

        case UPDATE_QUESTION:
            return {
                ...state,
                questions: state.questions.map((el) => {
                    if (el.id === action.payload.id) {
                        el.isAnswered = true;
                        return el;
                    } else {
                        return el;
                    }
                })
            };

        default:
            return state;
    }
};
