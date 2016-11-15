const express = require('express');
const router = express.Router();
const mongodb = require('../mymongodb');

const path = require('path');

/* GET users listing. */
router.post('/', function (req, res, next) {
	return mongodb.get().then((db) => {
		console.log(req.body);
		var record = {
			data: req.body
		};
		
		var collection = db.collection("sent_data");
		return collection.insertOne(record, {})
		.then((data) => {
			return res.send(JSON.stringify(data));
		});
	})
	.catch(e => {
		console.log(e);
		res.send("An error occured");
	});
});

module.exports = router;
