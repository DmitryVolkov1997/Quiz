import React, {Component} from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false,
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu,
        });
    };

    render() {
        const {menu} = this.state;

        return (
          <div className={classes.layout}>
              <Drawer isOpen={menu}/>
              <MenuToggle onToggle={this.toggleMenuHandler} isOpen={menu}/>
              <main className={classes.main}>{this.props.children}</main>
          </div>
        );
    }
}

export default Layout;
