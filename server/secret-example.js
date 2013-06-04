// rename this to secret.js

// you dont want to share your keys
// on github or other source control

module.exports = Object.freeze({
	db: {
		user:"user",
		pass:"pass",
		url: "server.com",
		port: 1234,
		name: "db_name"
	}, 
	email: {
        user: "user_acct",
        pass: "your_key"
    },
    admin: {
    	user: "user",
    	pass: "pass"
    }
});
