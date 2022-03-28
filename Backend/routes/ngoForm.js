import mongoose from "mongoose";
import schema from "../database/schema.js";

const Ngo = mongoose.model("Ngo", schema.ngoSchema);

export default function ngpForm(req, res){

    var name = req.body.Name;
    var city = req.body.City;
    var country = req.body.Country;
    var description = req.body.Description;
    var image = req.body.Image;
    var link = req.body.Link;
    var address = req.body.Address;
    var phone = req.body.Phone;
    var works = req.body.Works;
    var awards = req.body.Awards;

    const newNgo = new Ngo({
        Name: name,
        City: city,
        Country: country,
        Image: image,
        Description: description,
        Link: link,
        Address: address,
        Phone: phone,
        Works: works,
        Awards: awards
    });

    newNgo.save(function (errors) {
        //saving user data to database
        if (!errors) {
            //code to send data on successful registration
            res.status(200).send("NGO Added Successfully!")
        } else {
            res.status(401).send("<h2>Registration failed</h2>");
        }
    });

}

