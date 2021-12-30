import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.question}>
        <span>
          <strong>2. Сколько будет 2 + 2?</strong>&nbsp;
        </span>
        <small>2 из 30</small>
      </p>

      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
