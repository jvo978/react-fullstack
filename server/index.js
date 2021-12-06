const express = require('express'); // instance of the framework
const app = express(); // initialize our server, make api requests
const db = require('./models')

app.use(express.json())

//Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001.')
    })
})