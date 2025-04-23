const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Add /profile:1 to the end of the url to see the profile');
});

app.get('/profile:1', (req, res) => {
    res.send('Profile 1');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});