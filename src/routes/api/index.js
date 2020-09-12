const { Router } = require('express');
const User = require('../../models/User');
const apiRouter = Router();

// this should be protected
apiRouter.get('/users/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.find({ _id: id });
		res.json(user);
	} catch (e) {
		if (e.name === 'CastError') {
			res.json({ error: true, message: 'please provide correct id value' });
		}
		res.json(e);
	}
});
// create new users
apiRouter.post('/users', async (req, res) => {
	try {
		const user = new User(req.body);

		const result = await user.save();
		console.log(result);
		res.json(user);
	} catch (e) {
		res.json(e);
	}
});
// get all user todos
apiRouter.get('/users/:id/todos', async (req, res) => {
	const { id: _id } = req.params;
	const user = await User.findOne({ _id });
	res.json(user.todoList);
});
apiRouter.post('/users/:id/todos', async (req, res) => {
	const { title, text } = req.body;
	const { id: _id } = req.params;
	const result = await User.findOneAndUpdate(
		{ _id },
		{ $push: { todoList: {text,title} } },
		{new :true}
	);
	res.json(result);
});
module.exports = apiRouter;
