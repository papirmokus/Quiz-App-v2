import { ADD_QUESTION, DELETE_QUESTION, FLUSH_STORE } from "./action-types"

const initialState = {
    idCounter: 0,
    questions: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case (ADD_QUESTION): {
            const newid = (state.idCounter + 1)
            const newState = {
                idCounter: (state.idCounter + 1),
                questions: [...state.questions, { id: newid, ...action.payload }]
            }
            return newState
        }

        case (DELETE_QUESTION): {
            const newState = {
                idCounter: state.idCounter,
                questions: state.questions.filter((item) => { return item.id !== parseInt(action.payload) })
            }
            return newState
        }

        case (FLUSH_STORE): {
            return initialState
        }

        default:
            return state;
    }
};

export default rootReducer;