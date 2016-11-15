const React = require ("react");

const Wizard = require("../react-wizard/react-wizard");
const WizardPage = require("../react-wizard/react-wizardpage");
const $ = require('npm-zepto');

const WizardPageView = require('../react-wizard/react-wizardpageview');

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

var Page1 = require('./demo/formpage');

class Page2 extends WizardPageView {
	render() {
		return (<p>This page does nothing but show this text</p>)
	}
}

var View = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello page 1 !</h1>
				<Wizard onComplete={this.onComplete.bind(this)} >
					<WizardPage page={<Page1 title="Form1" data={{}}/>}/>
					<WizardPage page={<Page2/>}/>
				</Wizard>
			</div>
		);
	},
	
	onComplete: function(data) {
		$.ajax({
			url:'/ajax',
			type: "POST",
			data: data,
			success: function() {
				alert ('data saved');
			}
		})
	}
});

module.exports = View;