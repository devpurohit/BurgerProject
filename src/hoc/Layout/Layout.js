import React, { Component } from "react";

import Aux from "../Aux/Aux";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  SideDrawerClosedhandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.SideDrawerClosedhandler}
          open={this.state.showSideDrawer}
        />
        <main className="mainLayout">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
