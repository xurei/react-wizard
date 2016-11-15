import 'babel-polyfill'
import {expect} from "chai"
const reducer = require('../reducers');
const actions = require('../actions');

var assert = require('assert');
describe('Redux', function() {
	describe('reducers', function() {
		it('should return the initial state', () => {
			expect(
					reducer(undefined, {})
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": 0,
				"wizardPageValidity": []
			})
		});
		
		it('should increment the page on NEXT_PAGE', () => {
			expect(
					reducer({"wizardPageIndex": 1}, actions.nextPage())
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": 2,
				"wizardPageValidity": []
			})
		});
		
		it('should decrement the page on PREV_PAGE', () => {
			expect(
					reducer({"wizardPageIndex": 1}, actions.prevPage())
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": 0,
				"wizardPageValidity": []
			})
		});
		
		it('should go back to page 0 on CANCEL', () => {
			expect(
					reducer({"wizardPageIndex": 42}, actions.cancel())
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": 0,
				"wizardPageValidity": []
			})
		});
		
		it('should go back to special page -1 on FINISH', () => {
			expect(
					reducer({"wizardPageIndex": 42}, actions.finish())
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": -1,
				"wizardPageValidity": []
			})
		});
		
		it('should change validity state on VALIDITY_CHANGE', () => {
			expect(
					reducer({"wizardPageIndex": 1}, actions.validityChange(1, true))
			).to.deep.equal({
				"wizardData": [],
				"wizardPageIndex": 1,
				"wizardPageValidity": {
					1: true
				}
			})
		});
		
		it('should change validity state on DATA_CHANGE', () => {
			expect(
					reducer({"wizardPageIndex": 1}, actions.dataChange(1, {value:"Hello World"}))
			).to.deep.equal({
				"wizardData": {
					1: {value:"Hello World"}
				},
				"wizardPageIndex": 1,
				"wizardPageValidity": []
			})
		});
		
	});
});

