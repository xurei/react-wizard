const React = require ("react");

const Wizard = require("../react-wizard/react-wizard");
const WizardPage = require("../react-wizard/react-wizardpage");

const WizardPageView = require('../react-wizard/react-wizardpageview');

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class Page1 extends React.Component {
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
		this.setState({ value: e.target.value }, null);
		setTimeout(() => this.props.onValidityChange(this.isValid()), 10);
	}
	
	render() {
		return (
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
		)
	}
}

class Page2 extends React.Component {
	render() {
		return (<p>Page 2</p>)
	}
}

class Page3 extends WizardPageView {
	
	isValid() {
		return this.getValidationState() == 'success';
	}
	
	render() {
		return (<p>Page 3</p>)
	}
}

var View = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello page 1 !</h1>
				<Wizard onComplete={()=>alert('complete')} onCancel={() => alert('cancel')}>
					<WizardPage page={<Page1/>}/>
					<WizardPage page={<Page1/>}/>
					<WizardPage page={<Page2/>}/>
				</Wizard>
			</div>
		);
	}
});

module.exports = View;