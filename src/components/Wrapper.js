import React from "react";

// Creates a sole wrapper div to be rendered on App.js
// Children props are all other components
const Wrapper = props => <div className="wrapper">{props.children}</div>

export default Wrapper;