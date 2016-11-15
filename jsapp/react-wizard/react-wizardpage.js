const React = require ("react");

class WizardPage extends React.Component {
	render() {
		return (
			<div>
				{this.props.page}
			</div>
		)
	}
}

WizardPage.propTypes = {
	//isValid: React.PropTypes.func.isRequired
	page: React.PropTypes.element.isRequired
};

module.exports = WizardPage;
