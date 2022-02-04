import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.scss";

export default class QuizList extends Component {
  renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li className={classes.QuizList__item} key={index}>
          <NavLink className={classes.QuizList__link} to={"/quiz/" + quiz}>Тест {quiz}</NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1 className={classes.QuizList__title}>Список тестов по образовательным программам</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
