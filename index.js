const express = require('express');
const axios= require('axios');
const puppeteer = require('puppeteer');
const app = express();

app.get('/',async (req, res) => {
    const url = "https://hoofoot.com/";

    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        const html = await page.content();
        await browser.close();
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