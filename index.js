const fs = require('fs')
const path = require('path');
const express = require('express')
const fsPromises = require('fs').promises;
const app = express();

const logMiddleware = require('./middleware/logMiddleware');


app.use((req, res, next) => {
    logMiddleware(`${req.method}\t${req.headers.origin}\t${req.url}`, 'requestLogs.txt');
    next();
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
    
});

app.listen(3000, () => {
    console.log('server running on port 3000!!')
});
