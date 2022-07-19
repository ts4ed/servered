import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(cors());
app.use(fileUpload({}));

app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://user:user@cluster0.8pnqpgo.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, () => console.log("SERVER STARTED ON PORT" + port));
  } catch (error) {
    console.log(error);
  }
}

startApp();
