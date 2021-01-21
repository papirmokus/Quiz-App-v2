import React, { useState } from "react";
import { addQuestion } from '../redux/actions'
import { useDispatch } from 'react-redux'

const initialFormState = {
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    correctAnswer: 1
}


const QuestionForm = (state) => {
    const [formData, setFormData] = useState(initialFormState)
    const dispatch = useDispatch()
    const [formIsValid, setFormIsValid] = useState(true)

    const validateForm = () => {
        if (formData.correctAnswer < 1 || formData.correctAnswer > 4) return false
        return formData.question && formData.answer1 && formData.answer2 && formData.answer3 && formData.answer4
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prevformData => ({ ...prevformData, [id]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validateForm()) {
            setFormIsValid(true)
            dispatch(addQuestion(formData))
            setFormData(initialFormState)
        } else {
            setFormIsValid(false)
        }

    }

    const dynamicError = formIsValid ? <p></p> : <p className="err-msg">Minden kérdésnek és válasznak legalább 1 karaktert tartalmaznia kell, továbba a helyes válasz sorszáma csak sámok lehetnek 1-től 4-ig!</p>

    return (
        <form className="question-form">
            <p>Új kérdés hozzáadása</p>
            <label> Kérdés:</label>
            <input
                id="question"
                type="text"
                autoFocus={true}
                value={formData.question}
                onChange={handleChange}
                autoComplete="off"
            />

            <label>1. válasz:</label>
            <input
                id="answer1"
                type="text"
                value={formData.answer1}
                onChange={handleChange}
                autoComplete="off"
            />

            <label>2. válasz:</label>
            <input
                id="answer2"
                type="text"
                value={formData.answer2}
                onChange={handleChange}
                autoComplete="off"
            />

            <label>3. válasz:</label>
            <input
                id="answer3"
                type="text"
                value={formData.answer3}
                onChange={handleChange}
                autoComplete="off"
            />

            <label>4. válasz:</label>
            <input
                id="answer4"
                type="text"
                value={formData.answer4}
                onChange={handleChange}
                autoComplete="off"
            />

            <label>Helyes válasz sorszáma:</label>
            <input

                id="correctAnswer"
                type="number"
                min="1"
                max="4"
                value={formData.correctAnswer}
                onChange={handleChange}
            />
            {dynamicError}
            <button
                onClick={handleSubmit}
                className="save-button"
            >
                Mentés
            </button>
        </form>
    )
}

export default QuestionForm;