import express, { urlencoded } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/TaskRoutes.js"
dotenv.config();
const app=express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

//mongodb connection
const connection=async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("connected to MONGODB!!!")
    }catch(err){
      console.log("can't able to connect to MONGODB")
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected to MONGODB")
  })


app.use("/api",routes);
app.get("/",(req,res)=>{
  res.json("hello ni");
})

const PORT=process.env.PORT || 8800;

app.listen(PORT,()=>{
    connection();
    console.log(`Sever is connected at http://localhost:${PORT}`);
})

