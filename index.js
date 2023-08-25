const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('Dragon is comming');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const selectedNews = news.filter(news => parseInt(news.category_id) === id);
        // console.log(selectedNews);
        res.send(selectedNews);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(news => news._id === id);
    // console.log(selectedNews);
    res.send(selectedNews);
})

app.listen(port, (req, res) => {
    console.log(`Dragon is running on port: ${port}`);
})