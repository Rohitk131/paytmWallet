
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors({
    origin: 'https://wallet-paytm.vercel.app',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.options('*', cors({
    origin: 'https://wallet-paytm.vercel.app',
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", rootRouter);
app.get('/', (req,res)=>{
    res.send("Just checking")
})
app.listen(3000, ()=>{
    console.log("Server started on port: 3000")
});


module.exports = app; 