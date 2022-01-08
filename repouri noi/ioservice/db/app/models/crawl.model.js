const mongoose = require("mongoose");

const Crawl = mongoose.model(
    "Crawl",
    new mongoose.Schema({
        word: String,
        link_start: String,
        results: [
            {
                type: String 
            }
        ],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    })
);

module.exports = Crawl;