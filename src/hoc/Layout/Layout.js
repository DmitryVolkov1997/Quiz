import React, { Component } from "react";
import classes from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <div className={classes.layout}>
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;