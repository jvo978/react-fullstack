const express = require('express'); // instance of the framework
const app = express(); // initialize our server, make api requests
const db = require('./models')

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001.')
    })
})