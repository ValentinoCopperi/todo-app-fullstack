require("dotenv").config();
const {connectToMongoDB} = require("./database")

const path  = require("path")

const router = require("./routes");
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());

app.use(express.static(path.join(__dirname , "build")))
const port = process.env.PORT ||  5000;
app.use("/api",router);
app.get("/" , (req,res) => {
    res.sendFile(path.join(__dirname , "build/index.html"))
})




async function startServer(){
    await connectToMongoDB()
    app.listen(port , () => {
        console.log("Server listening")
    })
}

startServer()
