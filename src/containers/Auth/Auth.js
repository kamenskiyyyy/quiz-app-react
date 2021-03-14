import {Component} from 'react';
import s from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {
  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className={s.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={s.AuthForm}>
            <Input
              label='Email'
            />
            <Input
              label='Пароль'
              errorMessage={'test'}
            />
            <Button type='success' onClick={this.loginHandler}>Войти</Button>
            <Button type='primary' onClick={this.registerHandler}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}