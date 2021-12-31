import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    return (
      <div className={classes.ActiveQuiz}>
          <p className={classes.question}>
        <span>
          <strong>{props.answerNumber}.&nbsp;{props.question}</strong>&nbsp;
        </span>
              <small>{props.answerNumber} из {props.quizLength}</small>
          </p>

          <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick}/>
      </div>
    );
};

export default ActiveQuiz;
