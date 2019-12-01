// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-fikkj.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true });

const Schema = mongoose.Schema;

//player schmea
const playerSchema = new Schema({
  name: String,
  level: Number,
  mana: Number,
  dex: Number,
  guild: String,
  icon: String
});


//user schema
const userSchema = new Schema({
  userName: String,
  pass: String

});

const PlayerModel = mongoose.model('player', playerSchema);
const UserModel = mongoose.model('user', userSchema);

//using cors
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//get  players info
app.get('/api/players', (req, res, next) => {
  console.log("get request")
  PlayerModel.find((err, data) => {
    res.json({ players: data });
  })
})

// //search for mages
// app.get('/api/players/search/:guild/:criteria', (req,res)=>{
//   console.log(req.params.guild);
//   console.log(req.params.criteria);
// if(req.params.criteria == 'guild')
//   {
//   PlayerModel.find({ 'guild': req.params.guild},
// (error,data) =>{
//   res.json(data);
// })
//   }
// })

//delete players based on id 
app.delete('/api/players/:id', (req, res) => {
  console.log(req.params.id);

  PlayerModel.deleteOne({ _id: req.params.id }, (error, data) => {
    if (error)
      res.json(error);

    res.json(data);
  })
})

//post and upload players to DB
app.post('/api/players', (req, res) => {
  console.log('post Sucessfull');
  console.log(req.body)
  console.log(req.body.name);
  console.log(req.body.level);
  console.log(req.body.icon);

  //crete player model
  PlayerModel.create({
    name: req.body.name,
    level: req.body.level,
    mana: req.body.mana,
    dex: req.body.dex,
    icon: req.body.icon,
    guild: req.body.guild,
  });
  res.json('data uploaded')
})

//get data 
app.get('/api/players/:id', (req, res) => {
  console.log(req.params.id);

  PlayerModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})
//users
////////////////////////////////////////////////

//post and upload user to DB
app.post('/api/users', (req, res) => {
  console.log('post Sucessfull');
  console.log(req.body)
  console.log(req.body.userName);
  console.log(req.body.pass);


  UserModel.create({
    userName: req.body.userName,
    pass: req.body.pass,
  });
  res.json('User data uploaded')
})


//checks your details
app.post("/api/users/login", (req, res) => {
  console.log("Login Works!");

  //get username and pass values 
  var username = req.body.username;
  var password = req.body.password;

  console.log(username, password);

  //finds if sucessfull send 200 status
  UserModel.findOne({ userName: username, pass: password }, (err, UserModel) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!UserModel) {
      return res.status(404).send();
    }
    console.log("sent the code")
    return res.status(200).send();
  })
});

//////////////////////////////////////////////////////

//edit players based on ID 
app.put('/api/players/:id', (req, res) => {
  console.log(req.body);
  console.log("Edit " + req.params.id);
  //find id and update
  PlayerModel.findByIdAndUpdate(req.params.id,
    req.body, { new: true }, (error, data) => {
      res.send(data);
    })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});