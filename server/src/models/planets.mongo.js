const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
});

// Connects
module.exports = mongoose.model('Planet', planetSchema);