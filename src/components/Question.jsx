import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";
import { useContext } from "react";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion =
    quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({type: 'SELECT_ANSWER', payload: answerText})}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;

