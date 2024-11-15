const express = require('express');
const axios= require('axios');
const { chromium } = require('playwright')
const app = express();

app.get('/',async (req, res) => {
    const url = "https://hoofoot.com/";

    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const html = await page.content();
        res.send(html);
    } catch (error) {
        console.error('Error fetching page with Puppeteer:', error);
        res.status(500).send('Failed to fetch the page');
    }
    // const response = await axios.get(url);
    // const html = response.data;
    // res.send(html);
});

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});