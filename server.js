//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static('./dist/phone-book-app-angular'));

/*app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/phone-book-app-angular/' }),
); */

if (process.env.NODE_ENV) {
    app.use(express.static(path.resolve(process.cwd(), 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
    })
}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);