import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteQuestion, flushQuestions } from '../redux/actions'


const QuestionList = () => {
    const questions = useSelector(state => state.questions)
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        console.log(e);
        dispatch(deleteQuestion(e.target.id))
    }

    const resetStore = (e) => {
        dispatch(flushQuestions(e.target.id))

    }

    return (
        <ul className="manager">
            {questions.map(item => (
                <li key={item.id} className="manager-item">
                    <div className="question-flex-container">

                        <button
                            className="delete-button"
                            id={item.id}
                            onClick={handleDelete}
                        >
                            <img
                                src="/images/btndelete.png"
                                alt=""
                                height="20px"
                                id={item.id}
                            />
                        </button>

                        <ol className="manager-ol" >
                            <p className="manager-question">{item.question}</p>
                            <li className="manager-answer">{item.answer1}</li>
                            <li className="manager-answer">{item.answer2}</li>
                            <li className="manager-answer">{item.answer3}</li>
                            <li className="manager-answer">{item.answer4}</li>
                            <p>Helyes válasz sorszáma: {item.correctAnswer}</p>

                        </ol>

                    </div>
                </li>

            ))}
            <button className="reset-button" onClick={resetStore}>Összes kérdés törlése</button>
        </ul>
    )
}

export default QuestionList











/*
const mapStateToProps = state => {
    //const {questions} = state
    console.log(state);
    return state;
};


const ConnectedList = (state) => (
    <ul>
        {state.questions.map(item => (
            <ul>
                <li class="question">{item.question}</li>
                <li>{item.answer1}</li>
                <li>{item.answer2}</li>
                <li>{item.answer3}</li>
                <li>{item.answer4}</li>
                <p>Helyes válasz: {item.correctAnswer}</p>
                <button>Törlés</button>
            </ul>

        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList);

export default List;
/*
<ul>
    {state.map(el => (<li key={el.id}>{el.title}</li>))
</ul>
*/