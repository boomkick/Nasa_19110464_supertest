const mongoose = require('mongoose');

require('dotenv').config();

// Update to match MongoDB
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = "mongodb+srv://Nasa19110464:Nasa19110464@nasa.rioxpuo.mongodb.net/";

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}