const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
	res.render('login', { title: 'Login To Your Account' });
});
router.post('/', (req, res) => {
	const {username,password}  = req.body ;
	res.redirect('/login');
});
module.exports = router;
