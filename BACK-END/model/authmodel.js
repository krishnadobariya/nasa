const mongoose = require('mongoose');

const authSchema = new mongoose.Schema(
    {
        date:{
            type:String,
            required:true
        },
        explanation:{
            type:String,
            required:true
        },
        hdurl:{
            type:String,
        },
        media_type:{
            type:String,
        },
        service_version:{
            type:String
        },
        title:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
);
module.exports = mongoose.model("auth",authSchema);