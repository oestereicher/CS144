let express = require('express');
let router = express.Router();
let app = express();

app.set('view engine', 'ejs');
app.set('views', '.');
router.get('/:username', (req, res) => {
	res.render('blog', 
	{
		title: "guuud title", 
		username: req.params.username
	}
	);
});
/*
router.get('/', function(req, res) {
	res.send('Will this work');
})*/

module.exports = router;