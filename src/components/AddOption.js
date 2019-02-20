import React from 'react';
export default class AddOption extends React.Component {

  state = {
    error: undefined
  };

	handleAddOption = (e) => { // e is event object
			e.preventDefault();

			const option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces
			const error = this.props.handleAddOption(option);

			this.setState(() => ({ error })); // shorthand for error: error

			if (!error) { // clear input if there wasn't an error
				e.target.elements.option.value = '';
			}
		};
		render() {
		return (
			<div>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option" />
					<button className="button">Add option</button>
				</form>
				</div>
		);
	}
}
