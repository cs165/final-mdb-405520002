const bodyParser = require('body-parser');
const express = require('express');
var router=express.Router();
var assert=require('assert');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
let collection=null;
async function main() {
  const DATABASE_NAME = 'score';
  const MONGO_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;

  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  db = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL);
  collection = db.collection('data');
  // The "process.env.PORT" is needed to work with Heroku.
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server listening on port ${port}!`);
};

main();

async function inputuser(req, res) {
  console.log(req.body);
  const player = req.body.player;
  const score=req.body.score;


  const data = { player: player
  ,score:score };
  const response =await collection.insertOne(data);

  res.json({ success: true });
}

async function getAllUser(req,res){
console.log('getUser');
 const response = await collection.find({}).toArray();
 console.log(response);
 res.send(response);
}

app.post('/history/', jsonParser, inputuser);
app.get('/getAllUserData', jsonParser, getAllUser);


// app.get('/get_hscore',function(req,res){
//   var resultarray=[];
//   MongoClient.connect(MONGO_URL,function(){
//     assert.equal(null,err);
//     var cursor=db.collection('user-data').find();
//     cursor.forEach(function(doc,err){
//       assert(null,err);
//       resultarray.push(doc);

//     },function(){
//       db.close();
//       res.render('server',{items:resultarray})
//     });
//   });

// });

// app.post('/insert',function(req,res){
//   var item={
//     name: req.body.name,
//     score: req.body.fscore,
//   };
//   MongoClient.connect(MONGO_URL,function(err,db){
//  assert.equal(null,err);
//  db.collection('user-data').insertOne(item,function(err,result){
//    assert.equal(null,error);
//    console.log('success');
//    db.close()
//  });

//   })

// });


////////////////////////////////////////////////////////////////////////////////

// TODO(you): Add at least 1 GET route and 1 POST route.
