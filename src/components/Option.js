import React from 'react';

const Option = (props) => (// stateless component // faster because it doesn't have the baggage of extends React.Component

	<div className="option">
	<p className="option__text">{props.count}. {props.optionText}</p>
		<button
		className="button button--link"
		onClick={(e) => {			{/*define inline arrow function -- called with (e) arg when button is clicked*/}
		props.handleDeleteOption(props.optionText);
		}}
		>
		remove
		</button>
	</div>
);

export default Option; // down below because of const declaration and naming variables in React dev tools
