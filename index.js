const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());

const Routes = require('./routes');

app.use('/api/posts', Routes);

app.get('/', (req, res) => {
    res.send('Welcome to the Home page');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})



