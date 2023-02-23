const express = require('express');
const data = require('../data/data');
const Data = require('../data/data')
const router = express.Router()



router.post('/post',async(req,res)=>{
    const info = Data({
        name:req.body.name,
        phone:req.body.phone,
        fathername:req.body.fathername,
        age:req.body.age,
        email:req.body.email,
        Dob:req.body.Dob
    })
    try
    {
        const init = await info.save();
        res.status(200).json(init)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})


router.get('/get',async(req,res)=>{
    try{
       const data=await Data.find();
       res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})

router.get('/getid/:id',async(req,res)=>
{
    try
    {
        const data=await Data.findById(req.params.id)
        res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})
router.put('/update/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const update=req.body;
        const data= await Data.findOneAndUpdate(id,update)
        res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const  del =  await data.findByIdAndDelete(id)
        res.status(200).json({"message":`${del.name} is deleted`})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
})





router.post('/name',async (req, res) => {    
    try {
       const filter = req.body.query;
       let Age= {} 
       if (filter.age) {
           Age.age= { $regex: filter.age }
       }
       let query = data.find(Age);
       const page = parseInt(req.body.page) || 1;
       const pageSize = parseInt(req.body.limit) || 5;
       const skip = (page - 1) * pageSize;
       const total = await data.countDocuments(Age);
       const pages = Math.ceil(total / pageSize);
       
   
       if (page > pages) {
           return res.status(404).json({
               status: "fail",
               message: "No page found",
           });
       }
       result = await query.skip(skip).limit(pageSize);
       res.json({
           status: "success",
           filter,
           count: result.length,
           page,
           pages,
           data: result
       });
   } catch (error) {
       console.log(error);
       res.status(400).json({
           status: "error",
           message: "Server Error",
       });
     }
    });








module.exports = router;