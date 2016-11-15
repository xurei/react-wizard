const React = require ("react");

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class Page extends React.Component {
	state = {
		value: ''
	};
	
	constructor(props) {
		super(props);
	}
	
	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
	}
	
	isValid() {
		return this.getValidationState() == 'success';
	}
	
	handleChange(e) {
		this.setState({ value: e.target.value }, () => this.props.onValidityChange(this.isValid()));
	}
	
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<form>
					<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState()}
					>
						<ControlLabel>Working example with validation</ControlLabel>
						<FormControl
								type="text"
								value={this.state.value}
								placeholder="Enter text"
								onChange={this.handleChange.bind(this)}
						/>
						<FormControl.Feedback />
						<HelpBlock>Validation is based on string length.</HelpBlock>
					</FormGroup>
				</form>
			</div>
		)
	}
}


Page.propTypes = {
	title: React.PropTypes.string.isRequired
};

module.exports = Page;