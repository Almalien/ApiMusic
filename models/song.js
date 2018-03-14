var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    artist:String,
    preview_url: String,
    image_small: String,
    image_medium: String,
    image_large: String,
    open_url:String,
    song_id: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Song', SongSchema);
