const React = require ("react");

const Wizard = require("./react-wizard/react-wizard");
const WizardPage = require("./react-wizard/react-wizardpage");

const WizardPageView = require('./react-wizard/react-wizardpageview');

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class Page1 extends WizardPageView {
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

class Page2 extends WizardPageView {
	isValid() {
		return this.getValidationState() == 'success';
	}
	
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

var MainView = React.createClass({
	render: function() {
		return (
			<Wizard onComplete={()=>alert('complete')} onCancel={() => alert('cancel')}>
				<WizardPage page={<Page1/>}/>
				<WizardPage page={<Page1/>}/>
				<WizardPage page={<Page2/>}/>
			</Wizard>
		);
	}
});

module.exports = MainView;