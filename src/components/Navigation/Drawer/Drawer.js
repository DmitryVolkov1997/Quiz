import React from "react";
import classes from './Drawer.module.scss';

const links = [1, 2, 3];

class Drawer extends React.Component {
    renderLinks = () => {
        return links.map((link, index) => {
            return (
              <li className={classes.item} key={index}>
                  <a className={classes.link} href="#"> Тест {link}</a>
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
          <nav className={cls.join(" ")}>
              <ul className={classes.list}>
                  {
                      this.renderLinks()
                  }
              </ul>
          </nav>
        );
    }
}

export default Drawer;
