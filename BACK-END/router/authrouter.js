const router = require("express").Router();

const {addData,
    viewBydate}= require('../controller/authcontroller')

router.post('/dataadd',addData)
router.get('/view/:date',viewBydate)

module.exports=router;