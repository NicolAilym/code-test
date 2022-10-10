import fetch from 'node-fetch'

const express = require('express');
const router = express.Router();

const app = express()
const fetch = (...arg) => import ('node-fetch').then(({default: fetch}) => fetch (...arg));
const url = 'https://doc.strider.tech/content/receipts.json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		'X-RapidAPI-Key': 'your-rapidapi-key'
	}
};

app.get('/', function (req, res) {
  res.send('Saludos desde express');
});

router.get(`/`, async function (req, res) {
	const url =
		'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
			'X-RapidAPI-Key': 'your-rapidapi-key'
		}
	};


fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
// async await syntax
try {
	const res = await fetch(url, options);
	const json = await res.json();
	console.log(json);
} catch (err) {
	console.log(err);
}

module.exports = router;
