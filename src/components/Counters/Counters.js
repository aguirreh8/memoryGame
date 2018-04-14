// Import components and styles
import React from "react";
import "./Counters.css"

// Counter display, takes two props
const Counters = props => (
	<div className="counters">
		<h1>Current Score: {props.current} | High Score: {props.highScore}</h1>
	</div>
)

// export function as default: Name can be changed when
// imported 
export default Counters;