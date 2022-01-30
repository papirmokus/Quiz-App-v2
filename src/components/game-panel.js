import React, { useState } from 'react';
import { useSelector } from 'react-redux'



const GamePanel = (props) => {

    const initialStyleState = {
        1: "game-li",
        2: "game-li",
        3: "game-li",
        4: "game-li",
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [playerScore, setPlayerScore] = useState(0)
    const [listItemStyle, setListItemStyle] = useState(initialStyleState)
    const [existsNext, setExistsNext] = useState(true)

    const questions = useSelector(state => state.questions)

    const sendGuess = () => {
        if (currentIndex > questions.length - 2) {
            setExistsNext(false)
        }
        setAnswered(true)
        if (parseInt(questions[currentIndex].correctAnswer) === selectedAnswer) {
            setHighlightCss(selectedAnswer, "game-li-correct")
            setPlayerScore(playerScore + 1)
        }
        else {
            setListItemStyle({
                ...initialStyleState,
                [questions[currentIndex].correctAnswer]: "game-li-correct",
                [selectedAnswer]: "game-li-incorrect"
            })
        }
    }

    const setHighlightCss = (id, hStyle) => {
        const newStyleState = {
            ...initialStyleState, [id]: hStyle
        }
        setListItemStyle(newStyleState)
    }

    const setAnswer = (e) => {
        const id = e.target.id
        setSelectedAnswer(parseInt(id))
        setHighlightCss(e.target.id, "game-li-selected")
    }

    const toggleNext = () => {
        const nextIndex = currentIndex + 1
        setCurrentIndex(nextIndex)
        setListItemStyle(initialStyleState)
        setAnswered(false)
        setSelectedAnswer(0)
    }


    const dynamicElement = existsNext ?
        <>
            <button
                onClick={sendGuess}
                disabled={answered || selectedAnswer === 0}
                className="game-button"
            >
                Küldés
            </button>
            <button
                onClick={toggleNext}
                disabled={!existsNext || !answered}
                className="game-button"
            >
                Tovább
            </button>
        </> : <p>Elfogytak a kérdések! A végső pontszám: {playerScore}</p>

    return (
        <div className="game-panel">
            <div className="game-info">
                <p className="player-name">{props.pName}</p>
                <div className="scorething-outer">
                    <div className="scorething-middle">
                        <div className="scorething-inner">
                            <p>{playerScore}</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="game-answers">
                <p><b>{questions[currentIndex].question}</b></p>
                <ul className="game-answers-ul">
                    <li
                        id="1"
                        onClick={setAnswer}
                        className={listItemStyle[1]}
                        disabled={!answered}
                    >
                        {questions[currentIndex].answer1}
                    </li>
                    <li
                        id="2"
                        onClick={setAnswer}
                        className={listItemStyle[2]}
                        disabled={!answered}
                    >
                        {questions[currentIndex].answer2}
                    </li>
                    <li
                        id="3"
                        onClick={setAnswer}
                        className={listItemStyle[3]}
                        disabled={!answered}
                    >
                        {questions[currentIndex].answer3}
                    </li>
                    <li
                        id="4"
                        onClick={setAnswer}
                        className={listItemStyle[4]}
                        disabled={!answered}
                    >
                        {questions[currentIndex].answer4}
                    </li>
                </ul>
                {dynamicElement}
            </div>
        </div>
    )
}

export default GamePanel