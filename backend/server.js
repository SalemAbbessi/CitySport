const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const cors=require("cors");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const productRoute = require("./routes/product.js")

dotenv.config();
const app=express();
const server=process.env.SERVER;
const PORT=process.env.PORT||5000
const DB=process.env.DB

app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser())

mongoose.connect(`${server}/${DB}`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("DB CONNECTED DONE"))
.catch((err)=>console.error("DB not connected",err))

app.use('/products',productRoute)

app.listen(PORT,console.log(`server running on port ${PORT}`));
