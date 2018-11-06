var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
    var token = req.cookies.jwt;
    console.log(token);
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
        // if everything good, save to request for use in other routes
        //req.userId = decoded.id;
        if (req.params.username != decoded.usr)
            return res.status(401).send({ auth:false, message: 'Wrong user'});
        next();
    });
}

module.exports = verifyToken;