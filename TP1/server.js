const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

function randomNumber(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const node_env = 'dev';
const randomPort = randomNumber(3000,4001);

app.get('/ping', (req, res) => {
    res.status(200).json({"result": "Pong"});
});

app.use(morgan('dev'));

app.listen(randomPort, () => {
    console.log(`listening on port ${randomPort} in ${node_env} node`);
});
