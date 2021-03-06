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
				<h2>Design Choices</h2>
				<ul>
					<li>
						To make the code as reusable as possible, Redux is only required inside the &lt;Wizard&gt; component.<br/>
						(But it can be used on the whole project if that's what you want).
					</li>
					<li>
						Data passing &amp; validation : <br/>
						The page reads its data via the data prop, and should call this.props.onChange() and this.props.onValidityChange() when data changes
						<AceEditor
								mode="javascript"
								theme="monokai"
								readOnly={true}
								width="100%"
						value={validityCode}>
							
						</AceEditor>
					</li>
				</ul>
			</div>
		)
	}
}

module.exports = Page;