import React from "react";
import "./Characters.css"

const Characters = props => (
	<img src={props.image}
		alt={props.alt} 
		className="img-thumbnail" 
		onClick={() => props.handleIncrement(props.id)} />
)

export default Characters;