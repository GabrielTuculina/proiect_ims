/* Requirements */
const express = require('express');
const bodyParser = require('body-parser');
const Crawler = require('simplecrawler');
const axios = require('axios');
const cors = require("cors");
const config = require('./app/config/db.config');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3003"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.post('/search_history', (req, res) => {
  const user_id = req.body.user_id;

	const url = config.get_user_searches;
  const data = { "user_id": user_id };
  const headers = { 
    headers: {
      'Content-Type': 'application/json', 'x-access-token': req.headers['x-access-token']}
  };
  
	axios.post(url, data, headers)
		.then(resp => {
			res.status(200).send( resp.data );
		})
		.catch(err => {
			res.send({error_msg: err});
		});
	
});

app.post('/new_search', (req, res) => {
  /* get USER_ID and SEARCH_STRING */
  const link = req.body.link

  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    res.status(403).send("Paste a full URL (http, https)");
  } else {
    const user_id = req.body.user_id
    const maxDepth = req.body.maxDepth
    const searched_word = req.body.word
    const search_results = []

    const crawler = Crawler(link)
      .on('fetchcomplete', function(queueItem, responseBuffer, response) {
        const type = response.headers['content-type']

        /* Search word in current page */
        if (type.includes('html') || type.includes('xml')) {
          const body = responseBuffer.toString()

          if (body.match(searched_word)) {
            search_results.push(queueItem.url)
          }
        }
      })
      .on('complete', function() {
        const url = config.add_user_search;
        const data = { "user_id": user_id, "word": searched_word, "link_start": link, "results": search_results };
        const headers = { 
          headers: {
            'Content-Type': 'application/json', 'x-access-token': req.headers['x-access-token']}
        };

        axios.post(url, data, headers)
          .then(resp => {
            res.status(200).send( resp.data );
          })
          .catch(err => {
            res.send({error_msg: err});
          });
      });

    crawler.maxDepth = maxDepth
    crawler.interval = 500
    crawler.maxConcurrency = 3

    crawler.start()
  }
})

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}.`);
});