import { combineReducers } from 'redux';
import wizardPageIndex from './wizardPageIndex';
import wizardPageValidity from './wizardPageValidity';
import wizardData from './wizardData';

const App = combineReducers({
	wizardPageIndex,
	wizardPageValidity,
	wizardData
});

module.exports = App;