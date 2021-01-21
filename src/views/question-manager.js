import QuestionList from '../components/question-list'
import QuestionForm from '../components/question-form'


const QuestionManager = () => {

    return (
        <div className="question-manager">
            <QuestionList />
            <QuestionForm />
        </div>
    )
};


export default QuestionManager;