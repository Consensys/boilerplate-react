const os = require('os');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const allowedRuntimeEnvVariables = require('./allowedRuntimeEnv');

const CLIENT_BUILD_PATH = path.resolve(__dirname, '..', 'build');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Setup security middleware
app.use(helmet())

// Setup compression middleware
app.use(compression())

// Serve static assets
app.use(express.static(CLIENT_BUILD_PATH));

// Pass as runtime only the env variables in the whitelist at './allowedRuntimeEnv'
const runtimeEnv = Object.keys(process.env)
    .filter(key => allowedRuntimeEnvVariables.includes(key))
    .reduce((obj, key) => {
        return {
            ...obj,
            [key]: process.env[key]
        };
    }, {});

// This piece of code is here to add some runtime env variable which were not available 
// when the js bundle was built. You can access them in your application by importing 
// getRuntimeEnvVar in utils.js. THE_NAME_OF_YOUR_VARIABLE instead of the classic process.env.THE_NAME_OF_YOUR_VARIABLE
// which will be undefined at build time; Please be sure that your variable name has been added to
// the white list in './allowedRuntimeEnv.js'
app.get('/runtimeEnv.js', function (req, res) {
    res.set('Content-Type', 'application/javascript');
    res.send('var runtimeEnv = ' + JSON.stringify(runtimeEnv));
});

app.get("/healthcheck", (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send({"hostname": os.hostname(), "status": "success", "timestamp": Date.now() / 1000, "results": []});
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(CLIENT_BUILD_PATH, 'index.html'));
});

module.exports = app;