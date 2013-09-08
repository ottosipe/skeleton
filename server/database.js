var MongoDB 	= require("mongodb");

var API = module.exports = exports;

(function(mongo) {
	var Server		= mongo.Server(process.env.DB_URL, parseInt(process.env.DB_PORT))
		, Database	= mongo.Db(process.env.DB_NAME, Server, {safe: false});

	API.connect = function initMongoDB(cb) {
		console.log('Starting DB Connection');
		Database.open(function(err, db) {
			if(err) { return cb(err); }
			Database.authenticate(process.env.DB_USER, process.env.DB_PASS, cb);
			API.db = Database;
		});
	};

})(MongoDB);
