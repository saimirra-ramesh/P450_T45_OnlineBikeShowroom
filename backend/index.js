express = require('express');
mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const cors = require("cors"); //allow frontend to access backend
const bodyParser = require("body-parser");
const { PORT, usersDbUrl, bikeDbUrl } = require('./config.js');

const prodRoute = require("./controller/prodRoute.js");//route to get all products or specific ones
const authRoutes = require('./controller/authRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));//to get id from url 
app.use(cors());

app.use("/products", prodRoute);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

//Just to check if server is working, visit http://localhost:5555/
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Express app homepage" });
});


// const connectUsersDB = async () => {
//     try {
//         await mongoose.connect(usersDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to Users DB");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const connectBikeDB = async () => {
//     try {
//         const bikeConnection = mongoose.createConnection(bikeDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
//         bikeConnection.on('open', () => {
//             console.log('Connected to Bike DB');
//         });
//         bikeConnection.on('error', (error) => {
//             console.log(error);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// connectUsersDB();
// connectBikeDB();
