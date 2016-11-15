const React = require ("react");

const Wizard = require("../react-wizard/react-wizard");
const WizardPage = require("../react-wizard/react-wizardpage");

const Intro = require('./demo/intro');
const FormPage = require('./demo/formpage');
const SelfReview = require('./demo/self-review');
const DesignChoices = require('./demo/design-choices');
const DesignChoices2 = require('./demo/design-choices2');
const Testing = require('./demo/tests');

var View = React.createClass({
	render: function() {
		return (
			<div style={{fontSize: "1.2em"}}>
				<h1 className="text-center" style={{marginBottom: "30px"}}>DEMO</h1>
				<Wizard>
					<WizardPage page={<Intro data={{}}/>}/>
					<WizardPage page={<DesignChoices data={{}}/>}/>
					<WizardPage page={<DesignChoices2 data={{}}/>}/>
					<WizardPage page={<FormPage data={{}} title="Form validation"/>}/>
					<WizardPage page={<Testing data={{}}/>}/>
					<WizardPage page={<SelfReview/>}/>
				</Wizard>
			</div>
		);
	}
});

module.exports = View;