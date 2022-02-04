import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.scss";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    quiz: [
      {
        id: 1,
        question: "Сколько будет 2 + 2?",
        rightAnswerId: 4,
        answers: [
          {
            id: 1,
            text: "Ответ-1",
          },
          {
            id: 2,
            text: "Ответ-2",
          },
          {
            id: 3,
            text: "Ответ-3",
          },
          {
            id: 4,
            text: "Ответ-4",
          },
          {
            id: 5,
            text: "Ответ-5",
          },
        ],
      },
      {
        id: 2,
        question: "Какого цвета небо??",
        rightAnswerId: 3,
        answers: [
          {
            id: 1,
            text: "Белого",
          },
          {
            id: 2,
            text: "Чёрного",
          },
          {
            id: 3,
            text: "Синего",
          },
          {
            id: 4,
            text: "Красного",
          },
          {
            id: 5,
            text: "Жёлтого",
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === "success") {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: {
          [answerId]: "success",
          results,
        },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: {
          [answerId]: "error",
          results,
        },
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  retryHandler = () => {
    this.setState({
      results: {},
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
    });
  };

  // componentDidMount() {
  //   const { id } = this.props.match.params;
  // }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Ответьте на все вопросы</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              onAnswerClick={this.onAnswerClickHandler}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
