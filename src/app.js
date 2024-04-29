const axios = require('axios');
const cheerio = require('cheerio');


const url = 'https://ge.globo.com/futebol/times/sao-paulo/';


async function fetchNotices() {
  try {
    
    const response = await axios.get(url);

    
    const $ = cheerio.load(response.data);

    
    const listNotices = $('a.feed-post-link');

    
    listNotices.each((index, element) => {
      
      const text = $(element).text();
      
      const href = $(element).attr('href');

      
      console.log(text);
      console.log(href);
      console.log('#################################');
    });
  } catch (error) {
    console.error('Erro ao buscar as notícias:', error);
  }
}


fetchNotices();
