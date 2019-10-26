// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Ambarqui5!',
		database: 'burgers_db'
	});
};
// Make the connection to MySQL
connection.connect()


// Export connection for ORM use
module.exports = connection;