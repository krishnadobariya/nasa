const mongoose = require('mongoose');
const authModel = require('../model/authmodel')


exports.addData = async (req, res) => {

    try {
            const insertData = new authModel({
                date: req.body.date,
                explanation:req.body.explanation,
                hdurl:req.body.hdurl,
                media_type:req.body.media_type,
                service_version:req.body.service_version,
                title:req.body.title,
                url:req.body.url
            });

            const saveData = await insertData.save();
            console.log("saevData....", saveData);

            res.status(201).json(
                {
                    message: "DATA ADDED SUCCESSFULLY.....",
                    status: 201,
                    data: saveData
                }
            )
        }
        catch (error) {
        console.log("Error:::", error);
        res.status(500).json(
            {
                message: "SOMETHING WANT WRONG",
                status: 500
            }
        )
    }
}

exports.viewBydate = async (req, res) => {
    try {
        
        const date = req.params.date
        const view = await authModel.findOne({date});
        console.log("...",date)
        if(!view)
        {
            res.status(404).json({
                message: "DOES NOT EXIST",
                status: 404,
                
            })
        }
        else
        {
            res.status(200).json({
                message: "DATA GET SUCCESSFULLY",
                status: 200,
                data: view
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: "SOMETHING WENT WRONG, PLEASE TRY AGAIN",
            status: 500,
            error: error.message
        })
    }
}