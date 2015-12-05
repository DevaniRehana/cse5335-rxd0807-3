var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

 app.get('/json/:item', function(req, res) {
    var user_id = req.params.item;

    var str;
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');

    var url = "mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q";
    MongoClient.connect(url,function(err,db){
      console.log("connected correctly to server");


      var getById = function(db, callback) {
        console.log("client requesting id " +user_id);

        var cursor =db.collection('employees').find({"_id":parseInt(user_id)});
       // console.log(cursor);
        cursor.each(function(err, doc) {
          assert.equal(err, null);
          if (doc != null) {
          //  console.dir(doc);
          //  console.log("doc "+doc);
            str=doc;
          } else {

            callback();
          }
        });

      }

      MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        getById(db, function() {

          db.close();
          res.json(str);  //Sending str to client
          console.log('Result returned for id' +user_id+': '+JSON.stringify(str)); //str is JSON and is converted to string to display
        });
      });

    });


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


