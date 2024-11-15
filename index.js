const express = require('express');
const axios= require('axios');
const app = express();

app.get('/',async (req, res) => {
    const url = "https://hoofoot.com/"
    const response = await axios.get(url);
    const html = response.data;
    res.send(html);
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});