const path = require('path');
const json2md = require("json2md")
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const chalk = require('chalk');

async function getHtml(url) {
    const { data: html } = await axios.get(url);
    return html;
}

async function pasrsePage(html) {

	// Load the HTML as a cheerio instance
    const $ = cheerio.load(html);
    
    // Find the products list elements
    const description = $('#mw-content-text > div > div > dl:nth-child(3) > dd:nth-child(2)').text();
	console.log(description);
	// We want to make a new directory for our markdown files to live
    // const directory = path.join('.', 'pages');
    // await fs.mkdirs(directory);
	
    // Loop through wigs and get data
    // for (let i = 0; i < description.length; i++) {
		
	// 	// Giving ourselves a little feedback about the process
    //     console.log(`Getting ${i} of ${description.length - 1}`);

	// 	// Get the DOM elements we need
    //     const wigLinkSpan = $(description[i]).find('a')[0];
    //     const wigNameSpan = $(wigLinkSpan).find('h3')[0];

    //     // Get wig link and name data
    //     const wigLink = $(wigLinkSpan).attr('href');
    //     const wigName = $(wigNameSpan).text();
        
    //     console.log(wigLink, wigName);
    // }
}

async function go() {
    const url = 'https://community.bistudio.com/wiki/or';

    if (url === undefined) {
        console.log(chalk.white.bgRed.bold('Please provide a URL to scrape.'));
        console.log('Try something like:');
        console.log(chalk.green('node index.js https://www.hairuwear.com/raquel-welch/products-rw/signature-wig-collection-2/'));
        return;
    }

    const html = await getHtml(url);
    // console.log(html);
	const data = await pasrsePage(html);
    console.log(data);
}



go();