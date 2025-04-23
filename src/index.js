const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Add /profile/1 to the end of the url to see the profile');
});

app.get('/profile/1', (req, res) => {
    res.send('Profile 1, now try /profile/2');
});

app.get('/profile/2', (req, res) => {
    res.send('Profile 2, now try /profile/3');
});

app.get('/profile/3', (req, res) => {
    res.send('Profile 3');
});

app.listen(8080, () => {
    console.log('Server is listening on port 3000');
});