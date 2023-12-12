let express = require("express");

let app = express();

let path = require("path");

// random route to landing page
app.get("/", (req, res) => {
    res.render('index');
});

// port we are listening on
const port = process.env.PORT || 3000;

// I want to use ejs
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, 'bs/slay')));


//how it is going to parse data
app.use(express.urlencoded({ extended: true }));


//Our server from postgres we will be using
const knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "Apartments",
        database: "Apartments",
        port: 5432,
        ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false
    }
});


app.listen(3000, () => console.log("Hey babyyyyy server is runnin luv"))

