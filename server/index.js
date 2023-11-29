// express.js

const path = require('path')
const express = require('express');
const workoutController = require('./controllers/workouts');
const userController = require('./controllers/users');
const app = express();  //instantiate express

const PORT = 3000;

app
    .use('/', express.static(path.join(__dirname, '../client/dist/')))
    .use(express.json())

    // CORS
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    })

    .use('/api/v1/workouts', workoutController)
    .use('/api/v1/users', userController)

    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })

console.log('1: Trying to start server')

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`)
});

console.log('3: End of file, waiting for requests...')
