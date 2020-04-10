
const path = require('path')

module.exports = function(app) {

    // html routes 

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });

    app.get('/complete', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/results.html'))
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

}
