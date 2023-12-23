const express = require('express');
const app = express();

app.use(express.json());

const wordRouter = require('./src/routes/wordRoutes');
const numberRouter = require('./src/routes/numberRoutes');
const whoRouter = require('./src/routes/userRoutes');

app.use('/api', wordRouter);
app.use('/api', numberRouter);
app.use('/api', whoRouter);

module.exports = app;