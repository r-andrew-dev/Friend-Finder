// setting up dependencies
const { createClient } = require('@typeform/api-client')
const keys = require("../keys.js");
const typeformClient = createClient({ token: keys.typeform.token});

typeformClient.responses.list({uid: 'GDsDD1'}).then(response => {

    console.log(response)

}, reason => {
    console.log(reason);
})

module.exports = function(app) {

    app.get('/api/friends', function(req, res){


        req.params.people
        res.json(data)

        
    })
}




// https://api.typeform.com/forms/GDsDD1/responses