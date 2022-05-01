//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/phone-book-app-angular'));

/*app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/phone-book-app-angular/' }),
); */

app.get('/*', function (req, res) {
    const fullPath = path.join(__dirname + '/dist/phone-book-app-angular/index.html');
    console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);