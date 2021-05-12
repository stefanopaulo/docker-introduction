const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql-container',
    user: 'root',
    password: 'AGzzcso1$',
    database: 'dockerintroduction'
});

connection.connect();

app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
        if (error) {
            throw error;
        }

        res.send(results.map(item => ({ name: item.name, price: item.price })));
    });
});

app.listen(9001, '0.0.0.0', () => console.log('listening on port 9001'));
