const React = require ("react");

class WizardPage extends React.Component {
	render() {
		var wrappedPage = React.cloneElement(this.props.page, {
			onValidityChange: (valid) => {
				this.props.onValidityChange(valid);
			},
			onChange: (data) => {
				this.props.onChange(data);
			},
			data: this.props.data
		});
		return wrappedPage;
	}
}

WizardPage.propTypes = {
	page: React.PropTypes.element.isRequired
};

module.exports = WizardPage;
