import mongoose from "mongoose";
import schema from "../database/schema.js";

const Ngo = mongoose.model("Ngo", schema.ngoSchema);

export default function shortDesc(req, res){
    var city = req.body.City;
    var country = req.body.Country;
    var name = req.body.Name;

    Ngo.findOne({Name: name,City: city, Country: country}, function(errors, foundData){
        if(errors){
            console.log(errors);
            res.status(401).send();
        }
        if(!foundData){
            res.status(401).send("Not able to find Ngo");
        }
        else{
        res.status(200).send(foundData);
    }
    });
}