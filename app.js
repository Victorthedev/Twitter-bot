require('dotenv').config();
const express = require('express');
const twitterRoutes = require('./routes/twitterRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/twitter', twitterRoutes);

app.listen(port, () => {
    console.log(`${port} is live`);
});