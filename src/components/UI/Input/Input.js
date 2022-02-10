import React from "react";
import classes from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Input = (props) => {
    const {type, label, value, onChange, errorMessage} = props;
    const inputType = type || "text";
    const cls = [classes.input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if (isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
      <div className={cls.join(" ")}>
          <label htmlFor={htmlFor}>{label}</label>
          <input id={htmlFor} type={inputType} value={value} onChange={onChange}/>
          {
              isInvalid(props) ? <span>{errorMessage || "Введите верное значение"}</span> : null
          }
      </div>
    );
};

export default Input;
