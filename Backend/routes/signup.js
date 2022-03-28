import mongoose from "mongoose";
import schema from "../database/schema.js";
import validator from "email-validator";
import bcrypt from "bcrypt";

const saltRounds = 10;
const User = mongoose.model("User", schema.userSchema);

export default function signup(req, res){

    var name = req.body.Name;
    var userName = req.body.Username;
    var password = req.body.Password;
    var contact = req.body.Contact;
    var email = req.body.Email;

    User.findOne({ Username: req.body.Username }, function (err, foundUser) {

        if (err) {
            console.log("Error (signup): ", err);
            // res.status(401).send();
        }
        if (!foundUser) {
            //ensuring no duplicate entry or signup
            var hashedPass = "";
            bcrypt.genSalt(saltRounds, (err, salt) => {
                if (err) console.log("Error (signup genSalt): ", err);
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) console.log("Error (signup hash): ", err);
                    else {

                        hashedPass = hash;

                        if (contact.length != 10) {
                            return res
                                .status(401)
                                .send(
                                    "<h1>Invaild Contact Number</h1><br>Contact number should be of 10 digits."
                                );
                        }
                        // var accessToken = issueToken(req, res);

                        //creating new user document
                        const newUser = new User({
                            Name: name,
                            Contact: contact,
                            Username: userName,
                            Password: hashedPass,
                            Email: email
                        });

                        newUser.save(function (errors) {
                            //saving user data to database
                            if (!errors) {
                                //code to send data on successful registration
                                res.status(200).send("Registration Success!")
                            } else {
                                res.status(401).send("<h2>Registration failed</h2>");
                            }
                        });
                    }
                });
            });
        } else {
            res.status(401).send("<h2>Already registered. Please login.</h2>");
        }
    });

}