const wizardData = (state = [], action) => {
	switch (action.type) {
		case 'DATA_CHANGE':
			var newState = Object.assign({}, state);
			newState[action.pageIndex] = action.data;
			return newState;
		case 'CANCEL':
			return [];
		default:
			return state;
	}
};

module.exports = wizardData;