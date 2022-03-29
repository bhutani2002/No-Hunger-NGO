import mongoose from"mongoose";
import schema from "../database/schema.js";

const City = mongoose.model("City", schema.citySchema);

export default function fetchCityCountry(req, res){

    City.find({}, function(errors, foundData){
        console.log(foundData);
    });
}