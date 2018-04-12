import React from "react";

const Main = props => (
	<div className="container">
		<div className="row">
			<div className="col">{props.children}</div>
		</div>
	</div>
);

export default Main;