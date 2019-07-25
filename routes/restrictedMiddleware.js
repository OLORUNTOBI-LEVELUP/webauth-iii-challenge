const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token,"This secret is very long and secure" , (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: 'can\'t touch this' });
            } else {
                req.decodedToken = decodedToken;
                  next();
            }
        });
    } else {
        res.status(401).json({ message:'YOU SHALL NOT PASS!' });
    }
};