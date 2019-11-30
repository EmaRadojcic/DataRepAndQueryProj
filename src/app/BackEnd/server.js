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

const playerSchema = new Schema({
  name: String,
  level: Number,
  guild: String,
  icon: String,
  // joined:Date
});


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

//get all players 
app.get('/api/players', (req, res, next) => {
  console.log("get request")
  PlayerModel.find((err, data) => {
    res.json({ players: data });
  })
})

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

  PlayerModel.create({
    name: req.body.name,
    level: req.body.level,
    icon: req.body.icon,
    guild: req.body.guild,
    //joined: req.body.joined

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


app.get('/api/users/:id', (req, res, next) => {
  console.log("get request users")
  console.log(req.params.id);
  // UserModel.find((err,data)=>{
  //   res.json({users:data});
  //   console.log({users:data});
  // })
    UserModel.find({ userName: req.params.id }, (err, data) => {
      res.json({ users: data });
      console.log({ users: data })
      console.log("userfound")
      
    })
  
})
//get user Data

// app.get('/api/users', (req,res,next,data) => {
//   console.log("get request user")
//   console.log("get: "+ req.params.id)
//   console.log(userName)

//  UserModel.find({ userName:req.params.id }, function(err) {

//   console.log(data.userName)
//   if(req.params.id == data.userName){
//     console.log(req.params.id + "test");   
//   }else{
//     console.log('no match');
//   }
//    if (err) {

//        console.log('Signup error');
//       return done(err);
//    }


//    //this.router.navigateByUrl("/read");
//  })

//  data = UserModel.findOne({userName:req.params.id})
//    if(req.params.id == data.userName){
//      res.status(200);
//      res.json({
//        "message" : "User logged in: " 
//      });
//  }

// )




//////////////////////////////////////////////////////


//edit players 
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