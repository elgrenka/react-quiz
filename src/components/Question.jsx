import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";
import { useContext } from "react";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("Question", quizState);
  const currentQuestion =
    quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer key={index} answerText={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;

