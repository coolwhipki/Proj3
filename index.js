let express = require("express");

let app = express();

let path = requre("path");

// random route to landing page
app.get("/", (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log("Hey babyyyyy server is runnin luv"))

