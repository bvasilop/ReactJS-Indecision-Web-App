import React from 'react';

const Action = (props) => ( // since we pass props as arg we don't need this. anymore // stateless functional component

			<div>
				<button
				className="big-button"
				onClick={props.handlePick}
				disabled={!props.hasOptions} // flip ! to disable
				>
				What Should I do?
				</button>
			</div>
		);


	export default Action;
