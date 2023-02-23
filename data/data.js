const mongoose=require('mongoose')

const  Schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        phone:{
             type:Number,
             required:true
,             maxLength:50,
        },
         fathername:{
            type:String,
            required:true,
            maxLength:15
         
        },
        age:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            maxLength:50,
        },
        Dob:{
            type:String,
            required:true,
        }

    }
)
module.exports = mongoose.model("data", Schema);