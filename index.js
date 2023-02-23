
const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors")
const Route =require("./apis/apis")
const app=express();

app.use(express.json())
app.use(cors())
app.use('/apis',Route)

mongoose.set("strictQuery", false)
const uri ="mongodb+srv://vikram24:YiFret2Glb1KapXQ@cluster0.pwfx8lq.mongodb.net/test";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
  app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
  })
})
.catch(err => console.log(err))




