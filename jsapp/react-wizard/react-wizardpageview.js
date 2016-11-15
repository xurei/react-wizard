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
	data: React.PropTypes.any.isRequired,
};

module.exports = WizardPageView;
