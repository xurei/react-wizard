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
		var validityCode = "class Page extends React.Component {\n"
			+ "	/* ... */\n"
			
			+ "	isValid() {\n"
			+ "		return true_or_false;\n"
			+ "	}\n"
			+ "	handleChange(e) {\n"
			+ "		//Called by an event\n"
			+ "		this.setState({ value: e.target.value }, this.props.onValidityChange(this.isValid()));\n"
			+ "	}\n"
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
						Data validation : It's the responsibility of the page to validate it's content via onValidityChange.
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