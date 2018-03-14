var Album = require('../models/album');
var Artist = require('../models/artist');
var Song = require('../models/song');

exports.getSongs = function(req, res, next){

    Song.find(function (err, songs){

          if(err){
              res.send(err);
          }

          res.json(songs)
      });

}

exports.createSong = function(req, res, next){

    var title = req.body.title;
    var artist = req.body.artist;
    var preview_url = req.body.preview_url;
    var image_small = req.body.image_small;
    var image_medium = req.body.image_medium;
    var image_large = req.body.image_large;
    var open_url = req.body.open_url;
    var song_id = req.body.song_id;
    

    if(!title){
        return res.status(400).send({error: 'The title is needed'});
    }  


        Song.findOne({title:title}, 
          function(err, existingSong){

          if(err){
            return next(err);
          }

          if(existingSong){
            return res.status(400).send({
              error: 'Song already exists '
            });
          }

          var song = new Song({
            title: title,
            artist: artist,
            preview_url: preview_url,
            image_small: image_small,
            image_medium: image_medium,
            image_large: image_large,
            open_url: open_url,
            song_id: song_id
  
          });

          song.save(function(err, song){

            if(err){
              return next(err);
            }

            res.status(201).json({
              song: song
            });
          });
        });
    
}

exports.deleteSong = function (req, res, next) {

  Song.remove({
      _id: req.params.song_id
  }, function (err, song) {
      res.json(song);
  });

}
