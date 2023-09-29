const express = require("express");
const sequelize = require("./db/sequelize");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extends: true }));
app.use(express.json());

// RUTA PRINCIPAL
app.use("/",require("./routes/indexRoutes"))
app.use('/login',require('./routes/indexRoutes'))
app.use('/register',require('./routes/indexRoutes'));
app.use('/products',require('./routes/indexRoutes'));
app.use('/usuarios',require('./routes/indexRoutes'));
app.use('/products/:id',require('./routes/indexRoutes'));
app.use('/usuarios/edit/:id',require('./routes/indexRoutes'));
app.use('/usuarios/delete/:id',require('./routes/indexRoutes'));



app.listen(port, () => {
    console.log("This serven on", port)
})