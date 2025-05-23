
// const express = require('express');

// const routes = require('./Routes/index');

// const app = express();

// const port = 5400;


// // CORS issue will be solved // manual cors issue fixing
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // http://localhost:3000
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
//     next();
// });

// //npm i cors
// app.use('/', routes);

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });



const express = require('express');
const mongoose = require("mongoose");
const routes = require('./Routes/index');
const restaurants = require('./Models/restaurants');
const EmployeeBooking = require('./Models/employeeBooking');
require('dotenv').config();

const app = express();
const port = 5400;



app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

mongoose.connect(process.env.MONGO_URI)
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

//npm i cors
app.use("/", routes);


app.use('/employee/booking', routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

