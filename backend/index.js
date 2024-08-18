
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
app.get('/', (req,res)=>{
    res.send("Just checking")
})
app.listen(3000, ()=>{
    console.log("Server started on port: 3000")
});


module.exports = app; 