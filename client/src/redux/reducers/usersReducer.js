import { UPDATE_USER, INIT_USER } from '../actionTypes/usersAT';

const initialState = { user: { points: 0 } };

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_USER:
            return { ...state, user: action.payload };

        case UPDATE_USER:
            console.log('dispatch reducer');

            return {
                ...state,
                user: {
                    ...state.user,
                    points: state.user.points + action.payload
                }
            };

        default:
            return state;
    }
};
