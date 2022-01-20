const mongoose = require('mongoose');
let limit = mongoose.Schema({
    guildID: String,
    userID: String,
    Count: Number,
})


module.exports = mongoose.model("sınır", sınır)