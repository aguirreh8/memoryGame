// Import components and styles
import React from "react";
import "./Characters.css"

// Character image element, takes once .json as prop
// Passes id property as arugment to function on click
const Characters = props => (
	<img src={props.image}
		alt={props.alt} 
		className="img-thumbnail" 
		onClick={() => props.handleIncrement(props.id)} />
)

// export function as default: Name can be changed when
// imported 
export default Characters;