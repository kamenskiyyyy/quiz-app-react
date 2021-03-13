import s from './AnswerList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => (
  <ul className={s.AnswerList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}/>
      )
    })}
  </ul>
)

export default AnswerList;