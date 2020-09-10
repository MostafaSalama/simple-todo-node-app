const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = process.env.MONGO_URL;
const dbConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
function retry() {
	console.log(chalk.bgGreen(`try to connect to ${dbURL}`));
	connect();
}
async function connect() {
	try {
		const connection = await mongoose.connect(dbURL,dbConnectionOptions);
		console.log(chalk.yellow(`connected to DB at ${dbURL}`));
	} catch (e) {
		console.log(chalk.bgRed(`error while connecting`));
		retry()
	}
}
module.exports = retry;
