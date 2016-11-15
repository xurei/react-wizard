export const nextPage = () => {
	return {
		type: 'NEXT_PAGE'
	}
};

export const prevPage = () => {
	return {
		type: 'PREV_PAGE'
	}
};

export const cancel = () => {
	return {
		type: 'CANCEL'
	}
};

export const finish = () => {
	return {
		type: 'FINISH'
	}
};

export const validityChange = (pageIndex, validity) => {
	return {
		type: 'VALIDITY_CHANGE',
		pageIndex: pageIndex,
		validity: validity
	}
};

export const dataChange = (pageIndex, data) => {
	return {
		type: 'DATA_CHANGE',
		pageIndex: pageIndex,
		data: data
	}
};