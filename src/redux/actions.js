import { ADD_QUESTION, DELETE_QUESTION, FLUSH_STORE } from "./action-types"

export function addQuestion(payload) {
    return { type: ADD_QUESTION, payload }
};

export function deleteQuestion(payload) {
    return { type: DELETE_QUESTION, payload }
}

export function flushQuestions(payload) {
    return { type: FLUSH_STORE, payload }
}