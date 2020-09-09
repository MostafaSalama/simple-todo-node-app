const http = require('http');
const chalk = require('chalk');
const app = require('../app');
const port = process.env.PORT || 8000;

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
	console.log(chalk.yellow(`app is running at ${port}`));
});
