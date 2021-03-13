import {Component} from 'react';
import s from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [
      {answers: [
              {text: 'Вопрос 1'},
              {text: 'Вопрос 2'},
              {text: 'Вопрос 3'},
              {text: 'Вопрос 4'},
          ]}
    ],
  }

  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1>Викторина</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}/>
        </div>
      </div>
    )
  }
}