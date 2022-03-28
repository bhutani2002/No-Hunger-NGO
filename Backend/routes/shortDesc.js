import mongoose from "mongoose";
import schema from "../database/schema.js";

const Ngo = mongoose.model("Ngo", schema.ngoSchema);

export default function shortDesc(req, res){
    var city = req.body.City;
    var country = req.body.Country;

    Ngo.find({City: city, Country: country}, function(errors, foundData){
        if(errors){
            console.log(errors);
            res.status(401).send("Not able to find Ngo");
        }
        else{
        var requiredData = [];
        for(var i =0;i<foundData.length; i++){
            var reqDesc = foundData[i].Description;
            var reqImage = foundData[i].Image;
            var customData = {
                Image: reqImage,
                Description: reqDesc
            };
            requiredData.push(customData);
        }
        console.log(requiredData);
        res.status(200).send(requiredData);
    }
    });
}