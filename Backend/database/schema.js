import mongoose from "mongoose";

var Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: String,
    Username: String,
    Password: String,
    Contact: String,
    Email: String
});

const ngoSchema = new Schema({
Name: String,
City: String,
Country: String,
Image: String,
Description: String,
Link: String,
Address: String,
Phone: String,
Works: String,
Awards: String
});

export default {userSchema, ngoSchema};