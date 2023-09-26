
const app =require('./app');

const dotenv = require("dotenv");
const connectdataBase = require('./config/database');
dotenv.config({ path: 'backend/config/config.env'});


connectdataBase();

// server.js

//const port = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
