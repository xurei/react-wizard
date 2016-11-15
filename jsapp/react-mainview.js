const React = require ("react");

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Row, Col } from 'react-bootstrap';

var MainView = React.createClass({
	render: function() {
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12}>
							{this.props.children}
							<ul>
								<li><Link to="/page1">Page 1</Link></li>
								<li><Link to="/demo">Demo</Link></li>
							</ul>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = MainView;