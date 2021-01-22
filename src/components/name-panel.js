import React, { useState } from 'react';
import { useSelector } from 'react-redux'



const NamePanel = (props) => {

    const [formData, setFormData] = useState('')
    const numberOfQuestions = useSelector(state => state.questions).length

    const handleChange = (e) => {
        const value = e.target.value
        setFormData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.cb(formData)
    }

    const errMsg = numberOfQuestions > 0 ? <></> : <p className="err-msg">Legalább egy kérdés szükséges az indításhoz</p>

    return (
        <form className="name-form">
            <label htmlFor="nameInput"><b>Játékos neve:</b></label>
            <input
                type="text"
                name="nameInput"
                id="nameInput"
                onChange={handleChange}
            />
            <button
                className="start-button"
                onClick={handleSubmit}
                disabled={numberOfQuestions < 1}
            >
                <img src="/images/btnstart.png" alt="" height="60px"></img>
            </button>
            {errMsg}
        </form>
    )
}

export default NamePanel