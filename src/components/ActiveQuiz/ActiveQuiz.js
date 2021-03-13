import s from './ActiveQuiz.module.css';
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
  <div className={s.activeQuiz}>
    <p className={s.question}>
      <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLenght}</small>
    </p>

    <AnswerList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}/>
  </div>
)

export default ActiveQuiz;