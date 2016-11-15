const React = require ("react");

class WizardPage extends React.Component {
	render() {
		var wrappedPage = React.cloneElement(this.props.page, {
			onValidityChange: (valid) => {
				this.props.onValidityChange(valid);
			}
		});
		return wrappedPage;
	}
}

WizardPage.propTypes = {
};

module.exports = WizardPage;
