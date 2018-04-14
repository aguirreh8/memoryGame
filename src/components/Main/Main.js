// Import components
import React from "react";

// Main page layout. Props are all elements
// under the collum, or children. This is
// used to add a boostrap container to page
const Main = props => (
	<div className="container">
		<div className="row">
			<div className="col">{props.children}</div>
		</div>
	</div>
);

// export function as default: Name can be changed when
// imported 
export default Main;