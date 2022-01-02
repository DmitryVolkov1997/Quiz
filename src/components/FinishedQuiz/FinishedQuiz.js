import React from "react";
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = (props) => {
    return (
      <div className={classes.FinishedQuiz}>
          <ul className={classes.FinishedQuiz__list}>
              <li className={classes.FinishedQuiz__item}>
                  <strong>1. </strong>
                  How are you?
                  <i className={`fa fa-times ${classes.error}`}/>
              </li>
              <li className={classes.FinishedQuiz__item}>
                  <strong>2. </strong>
                  Do you speak English?
                  <i className={`fa fa-check ${classes.success}`}/>
              </li>
          </ul>
          <p className={classes.FinishedQuiz__count}>Правильно 5 из 30</p>

          <div className={classes.borderTop}>
              <button className={classes.FinishedQuiz__btn}>Повторить</button>
          </div>
      </div>
    );
};

export default FinishedQuiz;
