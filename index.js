const axios = require('axios');
const PORT =  3000;
const cheerio = require('cheerio');
const { response } = require('express');
const express  =require('express');
const app  = express();
const url = "http://www.theguardian.com/uk"

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const article = [];

        $('.fc-item__title', html).each(function(){
            const title = $(this).text()
           const url =  $(this).find('a').attr('href')
           article.push({
               title ,
               url
           })
        })
        console.log(article)

    }).catch(err => console.log(err))

app.listen(PORT , () => console.log(`server running on port ${PORT}`))
 