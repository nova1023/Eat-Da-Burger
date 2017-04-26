var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = 
{
	selectAll: function(value, table, cb)
	{
		var queryString = "SELECT " + value + " FROM " + table + ";";

		connection.query(queryString, function(err, res) 
		{
			if (err)
			{
				throw err;
			}

			cb(res);
		});
	},

	insertOne: function(table, col, val, cb) 
	{
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += col.toString();
		queryString += ") ";
		queryString += "Values (";
		queryString += printQuestionMarks(val.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, val, function(err, res) 
		{
			if (err)
			{
				throw err;
			}

			cb(res);
		});
	},

	updateOne: function(table, objColVals, condition, cb) 
	{
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition + ";";

		connection.query(queryString, function(err, res)
		{
			if (err)
			{
				throw err;
			}

			cb(res);
		});
	}
};

module.exports = orm;