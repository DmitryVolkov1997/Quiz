import React, {Component} from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.scss";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
    loginHandler = () => {
    };

    registerHandler = () => {
    };

    submitHandler = (e) => {
        e.preventDefault();
    };

    render() {
        return (
          <div className={classes.auth}>
              <div className={classes.auth__body}>
                  <h1 className={classes.auth__title}>Авторизация</h1>

                  <form className={classes.auth__form} onSubmit={this.submitHandler}>
                      <Input label="Email"/>
                      <Input label="Пароль" errorMessage={"TEST"}/>

                      <div className={classes.auth__btns}>
                          <Button type="primary" onClick={this.loginHandler}>
                              Войти
                          </Button>
                          <Button type="primary" onClick={this.registerHandler}>
                              Зарегистрироваться
                          </Button>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}

export default Auth;
