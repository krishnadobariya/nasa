const express = require('express')
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
require("./db/conn")


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())


const authrouter = require("./router/authrouter")
app.use("/auth",authrouter);



app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`);
});