import React from "react";
import classes from './Button.module.scss';

const Button = (props) => {
    const {onClick, disabled, type} = props;
    const cls = [classes.Button, classes[type]];

    return (
      <button className={cls.join(" ")} onClick={onClick} disabled={disabled}>
          {props.children}
      </button>
    );
};

export default Button;
