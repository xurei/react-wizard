const React = require ("react");

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const WizardPageView = require('../../react-wizard/react-wizardpageview');

class Page extends WizardPageView {
	constructor(props) {
		super(props);
	}
	
	getValidationState(data) {
		const length = data.value ? data.value.length : 0;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
	}
	
	isValid(data) {
		return this.getValidationState(data) == 'success';
	}
	
	handleChange(e) {
		var data = { value: e.target.value };
		this.props.onChange(data);
		this.props.onValidityChange(this.isValid(data));
	}
	
	render() {
		var value = this.props.data.value;
		if (!value)
			value = "";
		return (
			<div>
				<h2>{this.props.title}</h2>
				<form>
					<FormGroup
							controlId="formBasicText"
							validationState={this.getValidationState(this.props.data)}
					>
						<ControlLabel>Working example with validation</ControlLabel>
						<FormControl
								type="text"
								value={value}
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

Page.propTypes.title = React.PropTypes.string.isRequired;

module.exports = Page;