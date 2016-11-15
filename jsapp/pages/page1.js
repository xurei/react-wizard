const React = require ("react");

const Wizard = require("../react-wizard/react-wizard");
const WizardPage = require("../react-wizard/react-wizardpage");

const WizardPageView = require('../react-wizard/react-wizardpageview');

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

var Page1 = require('./demo/formpage');

class Page2 extends React.Component {
	render() {
		return (<p>This page does nothing but show this text</p>)
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
					<WizardPage page={<Page1 title="Form1" data={{}}/>}/>
					<WizardPage page={<Page1 title="Form2" data={{}}/>}/>
					<WizardPage page={<Page2/>}/>
				</Wizard>
			</div>
		);
	}
});

module.exports = View;