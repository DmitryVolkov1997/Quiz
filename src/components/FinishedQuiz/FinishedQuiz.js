import React from "react";
import classes from './FinishedQuiz.module.scss';
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total += 1;
        }

        return total;
    }, 0);

    return (
      <div className={classes.FinishedQuiz}>
          <ul className={classes.FinishedQuiz__list}>
              {
                  props.quiz.map((quizItem, index) => {
                      const cls = ['fa', props.results[quizItem.id] === 'error' ? "fa-times" : "fa-check", classes[props.results[quizItem.id]]];
                      return (
                        <li className={classes.FinishedQuiz__item} key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(" ")}/>
                        </li>
                      );
                  })
              }
          </ul>


          <div className={classes.borderTop}>
              <p className={classes.FinishedQuiz__count}>Правильно {successCount} из {props.quiz.length}</p>
              <Button className={classes.FinishedQuiz__btn} onClick={props.onRetry} type="primary">
                  Повторить
              </Button>
              <Button>
                Перейти в список тестов
              </Button>
          </div>
      </div>
    );
};
export default FinishedQuiz;
