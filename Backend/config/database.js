//mongodb+srv://anish:<password>@cluster0.h0ptozl.mongodb.net/
const mongoose = require('mongoose');

const connectdataBase = () => {
    mongoose.connect(process.env.DB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data)=>{
            console.log(`Mongodb connevted with server :${data.connection.host}`)
        }).catch((error) => {
            console.log("Error connecting to MongoDB:", error);
          });
}

module.exports=connectdataBase;