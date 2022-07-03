var express = require('express');
var app = express();

app.get('/', (req, res) => {
    const request = require('request');
    request('https://lol.qq.com/act/a20220430sale/index.html?ADTAG=innercop.lol.SY.advertising_new', function (error, response, body) {
        if(!error && response.statusCode == 200)
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('3000, 爬虫工具已经运行！ ');
});