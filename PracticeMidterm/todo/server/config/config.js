var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development'; // use the env variable if configured else use development.
//port runs on port 3300
var config = {
    development: {
        root: rootPath,
        app: { name: 'PracticeMidterm' },
        port: 3300,
        //db: 'mongodb://127.0.0.1/helpMe-dev'

    },


};

module.exports = config[env];