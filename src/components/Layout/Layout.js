import React from "react";

import Aux from "../../hoc/Aux";
import "./styles.css";

const layout = props => (
  <Aux>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className="mainLayout">{props.children}</main>
  </Aux>
);

export default layout;
