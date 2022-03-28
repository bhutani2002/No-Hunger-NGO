import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DBUsername;
const password = process.env.DBPassword;
const url ="mongodb+srv://ngoproject:ngoproject30032022@cluster01.o47ui.mongodb.net/ngoDB?retryWrites=true&w=majority";

mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        if(err) console.log(err);
        else console.log('Database connected')
    });

const app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


import signup from "./routes/signup.js";
import login from "./routes/login.js";
import shortDesc from "./routes/shortDesc.js";
import completeDesc from "./routes/completeDesc.js";

app.post("/signup", signup);
app.post("/login", login);
app.post("/shortDesc", shortDesc);
app.post("/completeDesc", completeDesc);

app.listen(process.env.PORT || port,  ()=> {
    console.log(`>> Server started successfully at port ` + process.env.PORT || port);
  });