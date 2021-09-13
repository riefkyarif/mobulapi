const express = require('express');
const app = express();

//var morgan = require('morgan');

//parse application/json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//panggil routes
//var routes = require('./routes');
//routes(app);

//datarkan menu routes dari index
//app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});