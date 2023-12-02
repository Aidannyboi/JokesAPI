const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const AllUserRoutes = require("./routes/jokes.routes");
AllUserRoutes(app);

app.listen(8000, () => console.log("The server is active on port 8000"));
