const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const empmodel = require('./models/emp');


const app = express();
app.use(express.json())
app.use(cors())

const mongoURI = 'mongodb://localhost:27017/mern';



mongoose.connect(mongoURI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
app.post('/user',(req,res)=>{
  empmodel.create(req.body)
  .then(mern => res.json(users))
  .catch(err => res.json(err))
})
app.post("/login",(req,res)=>{
  const {name, password} = req.body;
  empmodel.findOne({name:name})
  .then(mer => 
    {
      if(mer){
        if(mer.password === password ){
          res.json("Success")
        }else{
          res.json("The Password is incorrect")
        }
      }else {
        res.json("No record is existed")
      }
    })
})


const port = process.env.PORT || 4000;


const message = 'Hello from your Express.js server!';


app.get('/', (req, res) => {
  res.send(message);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});