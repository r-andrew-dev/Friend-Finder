// npm package dependencies
const express = require('express');

// sets up express app 

const app = express();
let PORT = process.env.PORT || 3000;

// adding so server language can be readable by humans

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('app/public'));

// ROUTES

require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);

// starts the server to begin listening 

app.listen(PORT, function() {
    console.log("APP listening on port " + PORT)
})

