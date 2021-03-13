import {Component} from 'react';
import s from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4},
        ]
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '1503', id: 1},
          {text: '1700', id: 2},
          {text: '1703', id: 3},
          {text: '1256', id: 4},
        ]
      }
    ],
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }
        window.clearTimeout(timeout)
      }, 1000)


    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1>Викторина</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}/>
        </div>
      </div>
    )
  }
}