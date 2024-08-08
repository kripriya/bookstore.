import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors  from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;




const uri = "mongodb+srv://priya1234:priya1234@cluster0.rqtlnhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connect to mongodb
try {
  mongoose.connect( uri,{
   "useNewUrlparser": true,
   "useUnifiedTopology": true,
  });

 console.log("connected  to mongoDB");

}catch (error) {
  console.log("Error: ",error);
  }

  //defining routes
  app.use("/book", bookRoute);
  app.use("/user",userRoute);

app.listen(PORT, () => {
console.log(`server is listening on port ${PORT}`);
});