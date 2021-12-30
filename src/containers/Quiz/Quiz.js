import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.scss";

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {
            text: "Ответ-1",
          },
          {
            text: "Ответ-2",
          },
          {
            text: "Ответ-3",
          },
          {
            text: "Ответ-4",
          },
          {
            text: "Ответ-5",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Ответьте на все вопросы</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}

export default Quiz;
