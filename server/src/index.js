'use strict';

const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

process.on('SIGTERM', function() {
    process.exit()
})

process.on('SIGINT', function() {
    process.exit();
});

app.listen(PORT);
console.log(`Application running`);