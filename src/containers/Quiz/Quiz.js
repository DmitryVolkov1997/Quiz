import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.scss";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
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
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
        });
    };

    render() {
        return (
          <div className={classes.quiz}>
              <div className={classes.wrapper}>
                  <h1 className={classes.title}>Ответьте на все вопросы</h1>
                  <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                              question={this.state.quiz[0].question}
                              quizLength={this.state.quiz.length}
                              answerNumber={this.state.activeQuestion + 1}
                              onAnswerClick={this.onAnswerClickHandler}/>
              </div>
          </div>
        );
    }
}

export default Quiz;
