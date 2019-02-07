import React from 'react';

const Controls = props => {
	const{locked,closed,toggleLocked,toggleClosed} = props;

	return (
		<div className="controls panel">
			<button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
			{locked ? "unlock gate" : "lock gate"}
			</button>
			<button disabled={locked} onClick={toggleClosed} className="toggle-btn">
			{closed ? "open gate" : "close gate"}
			</button>
		</div>

	);
};

export default Controls;
