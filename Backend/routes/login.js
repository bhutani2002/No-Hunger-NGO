import mongoose from "mongoose";
import bcrypt from "bcrypt";
import schema from "../database/schema.js";

const User = mongoose.model("User", schema.userSchema);

export default function login(req, res) {
  const { Username, Password } = req.body;
  User.findOne({ Username: Username }, async (err, user) => {
    if (err){
        console.log("Error (signin): ", err);
        res.status(400).send();
    }
    if (user) {
      bcrypt.compare(Password, user.Password, function (err, result) {
        if (err) console.log("Error (signin bcrypt): ", err);
        if (result == true) {
          res.status(200).send({message: "Login Success"});
        }
        else {
          res.status(401).send({ message: "Password didn't match" });
        }

      });
    } else {
      res.status(401).send({ message: "User not registered" });
    }
  });
};

