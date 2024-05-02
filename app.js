const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const gamesRouter = require('./routes/games');
const mainRouter = require('./routes/main');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')), bodyParser.json(), mainRouter, gamesRouter);
