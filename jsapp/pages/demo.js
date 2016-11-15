const React = require ("react");

const Wizard = require("../react-wizard/react-wizard");
const WizardPage = require("../react-wizard/react-wizardpage");

const WizardPageView = require('../react-wizard/react-wizardpageview');

import { FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Row, Col } from 'react-bootstrap';

const Intro = require('./demo/intro');
const FormPage = require('./demo/formpage');
const SelfReview = require('./demo/self-review');
const DesignChoices = require('./demo/design-choices');

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

var View = React.createClass({
	render: function() {
		return (
			<div style={{fontSize: "1.2em"}}>
				<h1 className="text-center" style={{marginBottom: "30px"}}>DEMO</h1>
				<Wizard onComplete={()=>alert('complete')} onCancel={() => alert('cancel')}>
					<WizardPage page={<Intro/>}/>
					<WizardPage page={<DesignChoices/>}/>
					<WizardPage page={<FormPage title="Form validation"/>}/>
					<WizardPage page={<FormPage title="Form validation (2)"/>}/>
					<WizardPage page={<SelfReview/>}/>
				</Wizard>
			</div>
		);
	}
});

module.exports = View;