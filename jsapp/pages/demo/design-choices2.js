const React = require ("react");

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Page extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.onValidityChange(true);
	}
	
	render() {
		var validityCode = "class Page extends WizardPageView {\n"
			+ "	/* ... */\n"
			
			+ "	isValid(data) {\n"
			+ "		return true_or_false;\n"
			+ "	}\n"
			+ "\n\thandleChange(e) {\n\t\tvar data = { value: e.target.value };\n\t\tthis.props.onChange(data);\n\t\tthis.props.onValidityChange(this.isValid(data));\n\t}\n"
			+ "\n	render() {\n" +
				"	return (" + "\<" + "Some_Input value={this.props.data.value} onChange={this.handleChange.bind(this)}>);\n" +
				"	}\n"
			+ "}\n";
		
		return (
			<div>
				<h2>Design Choices - Redux states</h2>
				<p>Three states</p>
				<ul>
					<li>
						wizardPageIndex : index of the currently displayed page
					</li>
					<li>
						wizardPageValidity : Validity of the pages
					</li>
					<li>
						wizardData : data passed by the pages on changes
					</li>
				</ul>
			</div>
		)
	}
}

module.exports = Page;