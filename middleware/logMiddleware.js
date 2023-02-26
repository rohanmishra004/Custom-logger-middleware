const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { v4: uuid } = require('uuid');
const {format} = require('date-fns');

const logMiddleware = async (message, logName) => {
    const date = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${date}\t${uuid()} ${message}`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..','logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName),logItem);
    } catch (err) {
        console.log(err);
    }
}


module.exports = logMiddleware;



