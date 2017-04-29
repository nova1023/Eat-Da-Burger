var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = ysql.createConnection({
		host:"otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "ek0yrlt6z05xaqu3",
		password: "lrb9xeivshww3wne",
		database: "xmlvp05aks3y02tp"
	});
};

connection.connect(function(err)
{
	if (err)
	{
		console.error("error connecting: " + err.stack);
    return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
