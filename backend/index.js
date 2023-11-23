express = require('express');
mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const cors = require("cors"); //allow frontend to access backend
const bodyParser = require("body-parser");
const PORT = 5555;

const cartRoutes = require('./controller/cartRoutes.js');
const prodRoute = require("./controller/prodRoute.js");
const authRoutes = require('./controller/authRoutes.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //to get the id from url 
app.use(cors());

app.use("/products", prodRoute);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


//Just to check if server is working, visit http://localhost:5555/
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Express app homepage" });
});