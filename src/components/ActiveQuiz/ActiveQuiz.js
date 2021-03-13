import s from './ActiveQuiz.module.css';
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
  <div className={s.activeQuiz}>
    <p className={s.question}>
            <span>
                <strong>2.</strong>&nbsp;
              Как дела?
            </span>
      <small>4 из 12</small>
    </p>

    <AnswerList
      answers={props.answers}/>
  </div>
)

export default ActiveQuiz;