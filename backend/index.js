express = require('express');
mongoose = require('mongoose');
mongoose.set("strictQuery",true);
const cors = require("cors"); //allow frontend to access backend
const bodyParser = require("body-parser");
const { PORT, dburl } = require('./config.js');

const prodRoute = require("./controller/prodRoute.js");//route to get all products or specific ones

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));//to get id from url 
app.use(cors());

app.use("/products", prodRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    });

//Just to check if server is working, visit http://localhost:5555/
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Express app homepage" });
    });

mongoose
    .connect(dburl).then(() => {
    console.log("Connected to DB");
    }
    ).catch((error) => {
        console.log(error);
    });
