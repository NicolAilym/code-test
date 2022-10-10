
const express = require('express');
const cors = require('cors');

var app = express();
var data = require('./public/javascripts/data');

const url = 'https://doc.strider.tech/content/receipts.json';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
    'X-RapidAPI-Key': 'your-rapidapi-key'
  }
};

const fetch = () => import ('node-fetch').then(({default: fetch}) => fetch (url, options));

app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000'
};

async function fetchData(res) {
  try {
    let response = await fetch(url, options);
    response = await response.json();
    data.loadData(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({msg: `Internal Server Error.`});
  }
}

app.get('/data', cors(corsOptions), async function(req, res) {
	return fetchData(res);
});

app.get('/customer', function(req, res) {
  response = data.customers();
  res.status(200).json(response);
});

app.get('/bestSeller', function(req, res) {
  res.send(data.best_seller());
});

app.get('/revenue', function(req, res) {
  res.send(data.revenue());
});

app.get('/orders', function(req, res) {
  res.send(data.orders());
});

app.get('/customersDetails', function(req, res) {
  res.send(data.customers_details(req.query.id));
});

module.exports = app;