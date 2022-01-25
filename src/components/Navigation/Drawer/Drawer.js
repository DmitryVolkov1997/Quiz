import React from "react";
import classes from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список" },
  { to: "/auth", label: "Авторизация" },
  { to: "/quiz-creator", label: "Создать тест" },
];

class Drawer extends React.Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li className={classes.item} key={index}>
          {/* <a className={classes.link} href="#">
            {" "}
            Тест {link}
          </a> */}
          <NavLink
            className={({ isActive }) =>
              isActive ? [classes.link, classes.active].join(" ") : classes.link
            }
            to={link.to}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul className={classes.list}>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
