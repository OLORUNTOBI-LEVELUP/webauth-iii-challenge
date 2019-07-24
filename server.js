const express = require('express');
const server = express();
const port = process.env.PORT || 3000
const userRoutes = require('./routes/usersroutes')

server.use(express.json());
server.use('/auth/api', userRoutes)


server.listen(port, () => console.log(`listening on port ${port}`) )

module.exports = server;