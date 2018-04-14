// Import components and styles
import React from "react";
import "./Title.css";

// Creates title banner, single
// element that is expanded by css
const Title = props => <h1 className="title">{props.children}</h1>

// export function as default: Name can be changed when
// imported 
export default Title;