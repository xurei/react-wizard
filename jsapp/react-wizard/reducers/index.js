import { combineReducers } from 'redux';
import wizardPageIndex from './wizardPageIndex';
import wizardPageValidity from './wizardPageValidity';

const App = combineReducers({
	wizardPageIndex,
	wizardPageValidity
});

module.exports = App;