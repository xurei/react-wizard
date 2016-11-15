const React = require ("react");

class WizardPageView extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

WizardPageView.propTypes = {
	//onValidityChange: React.PropTypes.func.isRequired
};

module.exports = WizardPageView;
