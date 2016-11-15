/**
 * Static wrapper to the MongoDB database
 */

const isset = require('./isset');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Connection URL
var url = 'mongodb://localhost:27017/keemotion';
		
var db_ready = false;
var db = null;

/**
 * @type {{Promise:object}}
 */
const es6Promise = require('es6-promise');
const Promise = es6Promise.Promise;

MongoClient.connect(url, function(err, _db) {
	if (isset(err)) {
		db = null;
		console.log("An error occured while connecting to the database.", err);
	}
	else {
		db = _db;
		console.log("Connected successfully to the database");
	}
	db_ready = true;
});

module.exports = {
	get: function() {
		var looper = (resolve, reject) => {
			if (db_ready) {
				if (db != null) {
					resolve(db);
				}
				else {
					reject("Not connected to the database");
				}
			}
			else {
				console.log('Waiting for DB');
				setTimeout(() => looper(resolve, reject), 100);
			}
		};
		return new Promise(looper);
	},
	
	objectId: function (id) {
		return new ObjectId(id);
	}
};