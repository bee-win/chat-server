const express = require('express');
// the way to import express (OG way)

const app = express();
// way to access all of express functions

app.use(express.json());
// used to run middleware for any endpoint we call from here 
//this is the body parser

const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
// method to show us what port the server will listen on

